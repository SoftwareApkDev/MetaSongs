import React from "react";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-gray-400 pt-28 pb-12 px-10">
      <div className="container flex flex-wrap justify-between items-start gap-8">
        {/* Left Side: Sections */}
        <div className="grid grid-cols-2 md:grid-cols-5 md:gap-28 gap-5 ">
          {/* Company Section */}
          <div>
            <h4 className="text-white font-bold mb-2">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Jobs</a></li>
              <li><a href="#" className="hover:underline">For the Record</a></li>
            </ul>
          </div>

          {/* Communities Section */}
          <div>
            <h4 className="text-white font-bold mb-2">Communities</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Developers</a></li>
              <li><a href="#" className="hover:underline">Advertising</a></li>
              <li><a href="#" className="hover:underline">Vendors</a></li>
            </ul>
          </div>

          {/* Useful Links Section */}
          <div>
            <h4 className="text-white font-bold mb-2">Useful links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Support</a></li>
              <li><a href="#" className="hover:underline">Free Mobile App</a></li>
            </ul>
          </div>
        </div>

        {/* Right Side: Social Icons */}
        <div className="flex space-x-4">
          <a href="#" className="h-11 w-11 p-3 bg-gray-800 rounded-full hover:bg-orange-600 transition-colors duration-300">
            <FaInstagram className="h-5 w-5 text-white" />
          </a>
          <a href="#" className="h-11 w-11 p-3 bg-gray-800 rounded-full hover:bg-orange-600 transition-colors duration-300">
            <FaTwitter className="h-5 w-5 text-white" />
          </a>
          <a href="#" className="h-11 w-11 p-3 bg-gray-800 rounded-full hover:bg-orange-600 transition-colors duration-300">
            <FaFacebookF className="h-5 w-5 text-white" />
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-sm text-gray-500 text-left">
        &copy; 2024 MetaSongs
      </div>
    </footer>
  );
};

export default Footer;
