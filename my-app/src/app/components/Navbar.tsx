import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <div className="text-xl font-bold text-gray-800 text-blue-600">Contact Manager</div>
        <div className="space-x-4">
          <a href="/" className="text-gray-600 hover:text-gray-900">
            Home
          </a>
         <a href="/contact/new" className="text-gray-600 hover:text-gray-900">
            New Contact
            </a>
            <a href="/login" className="text-gray-600 hover:text-gray-900">
            Login
            </a>
        </div>


      </div>
    </nav>
  );
};

export default Navbar;
