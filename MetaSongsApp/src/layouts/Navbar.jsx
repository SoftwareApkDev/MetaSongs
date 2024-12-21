import React, { useState, useEffect } from "react";
import { FaUserCircle, FaBars, FaEye, FaEyeSlash } from "react-icons/fa";
import SignIn from "../components/SignIn";

const Navbar = ({ toggleSidebar }) => {
  const [isOpen, setIsOpen] = useState(false); // Untuk dropdown profile
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Status login
  const [showSignIn, setShowSignIn] = useState(false); // State untuk popup Sign In
  const [showPassword, setShowPassword] = useState(false); // Password visibility
  const [rememberMe, setRememberMe] = useState(false); // Remember Me checkbox
  const [email, setEmail] = useState(""); // State untuk email pengguna

  // Cek Local Storage untuk status login dan email
  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    const savedEmail = localStorage.getItem("rememberedEmail");

    if (loggedIn) {
      setIsLoggedIn(true);
    }

    if (savedEmail) {
      setEmail(savedEmail);
      setRememberMe(true); // Jika email ada, otomatis centang checkbox
    }
  }, []);

  const handleSignIn = () => {
    setIsLoggedIn(true); // Set status login ke true
    setShowSignIn(false); // Tutup popup Sign In

    if (rememberMe) {
      localStorage.setItem("rememberedEmail", email); // Simpan email di Local Storage
      localStorage.setItem("isLoggedIn", "true"); // Simpan status login
    } else {
      localStorage.removeItem("rememberedEmail"); // Hapus email dari Local Storage
      sessionStorage.setItem("isLoggedIn", "true"); // Simpan status login di Session Storage
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false); // Logout
    setIsOpen(false); // Tutup dropdown
    localStorage.removeItem("isLoggedIn"); // Hapus status login
    sessionStorage.removeItem("isLoggedIn"); // Hapus status login dari Session Storage
  };

  return (
    <>
      <div className="h-16 w-full md:bg-gray-900 rounded-s-3xl text-white flex items-center justify-between md:justify-end px-10 font-poppins">
        {/* Toggle Sidebar Button */}
        <button
          onClick={toggleSidebar}
          className="text-2xl md:hidden focus:outline-none"
        >
          <FaBars size={24} />
        </button>

        {!isLoggedIn ? (
          // Tampilkan Sign In dan Sign Up jika belum login
          <div className="flex gap-4">
            <button className="hover:text-white font-bold text-lg text-gray-400 py-1 px-3 rounded">
              Sign Up
            </button>
            <button
              onClick={() => setShowSignIn(true)}
              className="bg-white hover:bg-transparent hover:border hover:text-white text-lg font-bold text-black py-2 px-4 rounded-full"
            >
              Sign In
            </button>
          </div>
        ) : (
          // Jika sudah login, tampilkan Icon Profile
          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none focus:ring-1 focus:rounded-full"
              aria-expanded={isOpen}
            >
              <FaUserCircle size={30} />
            </button>
            {isOpen && (
              <div className="absolute right-0 mt-2 bg-gray-400 bg-opacity-30 text-white py-2 px-4 font-semibold rounded shadow-lg tracking-wide z-50">
                <a href="/profile" className="block hover:text-orange-300">
                  Profile
                </a>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left hover:text-orange-300"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Popup Sign In */}
      <SignIn isOpen={showSignIn} onClose={() => setShowSignIn(false)}>
        <div className="p-8 tracking-wide font-poppins">
          <h2 className="text-3xl font-bold mb-1 mt-12 text-orange-400">Sign In</h2>
          <h5 className="text-md font-thin mb-4 text-gray-400">
            Please login to continue to your account.
          </h5>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSignIn();
            }}
          >
            <label className="block text-sm mt-10 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full mb-4 p-3 bg-transparent border border-gray-400 rounded-lg focus:outline-none focus:border-orange-400"
              required
            />
            <label className="block text-sm mb-1">Password</label>
            <div className="relative w-full">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full p-3 bg-transparent border border-gray-400 rounded-lg focus:outline-none focus:border-orange-400"
                required
                minLength={8}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                {showPassword ? (
                  <FaEyeSlash size={18} className="text-white" />
                ) : (
                  <FaEye size={18} className="text-white" />
                )}
              </button>
            </div>
            <div className="flex items-center py-4 ms-1">
              <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="custom-checkbox mr-2"
              />
              <label htmlFor="rememberMe" className="text-sm text-gray-300">
                Remember me
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-400 py-3 rounded-lg"
            >
              Sign In
            </button>
            <div className="border-b mt-4 border-gray-600"/>
            <div className="text-center text-xs tracking-wider mt-3 ">
              <p>Don't have an account?</p>
              <a href="/"> <span className="underline text-orange-500">Sign In</span></a>
            </div>
          </form>
        </div>
      </SignIn>
    </>
  );
};

export default Navbar;
