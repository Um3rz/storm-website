import React, { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-black py-3 px-10">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo on the left side */}
        <div className="">
          <span>
            <img src="storm.png" className="w-20"></img>
          </span>
        </div>

        {/* Navigation links in the middle */}
        <div className="hidden md:flex space-x-4 ">
          <a href="#" className="text-white">
            Home
          </a>
          <a href="#" className="text-white">
            About Us
          </a>
          <a href="#" className="text-white">
            Pricing
          </a>
          <a href="#" className="text-white">
            Courses
          </a>
        </div>

        {/* Burger menu button for mobile view */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-white">
            <i class="fa-solid fa-bars"></i>
          </button>
        </div>

        {/* Contact Us button on the right side */}
        <div className="hidden md:flex">
          <button className="bg-white text-black  px-4 py-2 rounded">
            Contact Us
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4">
          <a href="#" className="block text-white py-2">
            Home
          </a>
          <a href="#" className="block text-white py-2">
            About Us
          </a>
          <a href="#" className="block text-white py-2">
            Pricing
          </a>
          <a href="#" className="block text-white py-2">
            Courses
          </a>
          <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded">
            Contact Us
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
