"use server";

import axios from "axios";
import { redirect } from "next/navigation";

const API_URL = "http://localhost:3001";

const user = {
  id: "",
  email: "",
  password: "",
};

export const loginAction = async (formData: FormData) => {
  let isLoginSuccessful = false;

  try {
    // 1. Fetch by email ONLY
    const response = await axios.get(
      `${API_URL}/users?email=${formData.get("email")}`,
    );

    // Debugging logs
    console.log("Database Response for this email:", response.data);

    if (response.data && response.data.length > 0) {
      const user = response.data[0];

      // 2. Use .trim() on BOTH values to strip away any hidden \r or \n spacing characters
      const formPassword = String(formData.get("password")).trim();
      const dbPassword = String(user.password).trim();

      if (dbPassword === formPassword) {
        console.log("SUCCESS: Passwords match! Logged in user:", user);

        isLoginSuccessful = true;

        // Proceed with session/cookie setup here...
      } else {
        console.log("FAILURE: Incorrect Password or email.");
        console.log(
          `Comparing Form: '${formPassword}' with DB: '${dbPassword}'`,
        );
      }
    } else {
      console.log("FAILURE: No user found with this email address.");
    }
  } catch (error) {
    throw new Error("Login failed");
  }

  if (isLoginSuccessful) {
    redirect("/contact");
  }else{
    
  }
};

export const logout = async () => {
  redirect("/login");
};
