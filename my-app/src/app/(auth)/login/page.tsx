import Link from "next/link";
import { loginAction } from "../../actions/auth";

export default function Login() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 md:px-6 xl:px-0 sd:px-0">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center text-blue-800">
            Login
          </h2>
         
          <form action={loginAction} className="space-y-4">

            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                className="w-full px-3 py-2 border rounded"
              required/>
            </div>
            <div>
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                className="w-full px-3 py-2 border rounded"
              required/>
            </div>
            <input
              type="submit"
              value="Login"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 cursor-pointer"
            />

            <h4>
              Don't have an account?{" "}
              <Link href="/register" className="text-blue-600 hover:underline">
                Register
              </Link>
            </h4>
          </form>
        </div>
      </div>
    </>
  );
}
