import React from "react";
import Vector from "../assets/images/Vector.png";
import Doctor from "../assets/images/Doctor.png";
import Logo from "../assets/images/Logo.png";

export default function LoginUser() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-white">
      <img
        src={Vector}
        alt="background shape"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="relative z-10 flex min-h-screen">
        <div className="flex w-full lg:w-1/2 items-center justify-center px-6">
          <div className="w-full max-w-md rounded-2xl bg-[#1a8f83]/90 p-8 shadow-2xl backdrop-blur-md">
            <div className="mb-6 flex justify-center">
              <div className="bg-white p-3 rounded-full">
                <img src={Logo} alt="logo" className="w-10 h-10" />
              </div>
            </div>

            <h2 className="mb-8 text-center text-2xl font-semibold text-white">
              Login to your Account
            </h2>

            <div className="mb-4">
              <label className="mb-2 block text-sm text-white">
                Username / Email
              </label>
              <input
                type="text"
                placeholder="Enter your username or email"
                className="w-full rounded-full px-4 py-3 text-sm
             bg-white text-gray-800 placeholder-gray-400
             outline-none focus:ring-2 focus:ring-teal-400"
              />
            </div>

            <div className="mb-4">
              <label className="mb-2 block text-sm text-white">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full rounded-full px-4 py-3 text-sm
             bg-white text-gray-800 placeholder-gray-400
             outline-none focus:ring-2 focus:ring-teal-400"
              />
            </div>

            <div className="mb-6 flex items-center justify-between text-xs text-white">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-teal-400" />
                Remember me
              </label>
              <a href="#" className="hover:underline">
                Forgot Password?
              </a>
            </div>

            <button className="w-full rounded-full bg-[#4fd1c5] py-3 font-semibold text-black hover:bg-[#3bb7ac] transition">
              LOGIN
            </button>
          </div>
        </div>

        <div className=" hidden lg:flex w-1/2 items-center justify-center relative">
          <div className="text-center px-10">
            <h1 className="text-4xl font-bold text-green-600 mb-4">
              Welcome to the <br /> TrustMed !
            </h1>

            <p className="text-gray-700 mb-8">
              Your trusted platform for smart, fast,
              <br /> and secure pharmacy operations.
            </p>

            <img src={Doctor} alt="illustration" className="mx-auto max-w-md" />
          </div>
        </div>
      </div>
    </div>
  );
}
