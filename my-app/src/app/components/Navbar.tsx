import React from "react";
import Link from "next/link";

const Navbar = () => {
  const session = false;

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-xl font-bold text-gray-800 text-blue-600"
        >
          Contact Manager
        </Link>

        

        <div className="space-x-4">
            <Link href="/" className="text-blue-600 hover:text-gray-900">
          Home
        </Link>
          {session ? (
            <>
              <Link
                href="/contact/new"
                className="text-blue-600 hover:text-gray-900"
              >
                Contacts
              </Link>

              <button className="text-blue-600 hover:text-gray-900">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="text-blue-600 hover:text-gray-900">
                Login
              </Link>
              <Link
                href="/register"
                className="text-blue-600 hover:text-gray-900"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
