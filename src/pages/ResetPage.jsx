import Vector2 from "../assets/images/Vector2.png";
import Doctor from "../assets/images/Doctor.png";
import Logo from "../assets/images/Logo.png";
import { Link } from "react-router-dom";

export default function ResetPage() {
  const handleReset = (e) => {
    e.preventDefault();
    alert("Password reset link sent!");
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-white">
      <img
        src={Vector2}
        alt="background shape"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="relative z-10 flex min-h-screen">
        <div className="hidden lg:flex w-1/2 items-center justify-center relative">
          <div className="text-center px-10">
            <img src={Doctor} alt="illustration" className="mx-auto max-w-md" />
          </div>
        </div>

        <div className="flex w-full lg:w-1/2 items-center justify-center px-6">
          <div className="w-full max-w-md rounded-2xl bg-[#1a8f83]/90 p-8 shadow-2xl backdrop-blur-md">
            <div className="mb-6 flex justify-center">
              <div className="bg-white p-3 rounded-full">
                <img src={Logo} alt="logo" className="w-10 h-10" />
              </div>
            </div>

            <h2 className="mb-4 text-center text-2xl font-semibold text-white">
              Reset Your Password
            </h2>

            <p className="mb-6 text-center text-sm text-white/90">
              Enter the email address assciated with your account and we'll send
              you a link to reset your password
            </p>

            <div className="mb-6">
              <label className="mb-2 block text-sm text-white">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-full px-4 py-3 text-sm
                bg-white text-gray-800 placeholder-gray-400
                outline-none focus:ring-2 focus:ring-teal-400"
              />
            </div>

            <button
              onClick={handleReset}
              className="w-full rounded-full bg-[#4fd1c5] py-3 font-semibold text-black hover:bg-[#3bb7ac] transition"
            >
              SEND RESET LINK
            </button>

            <div className="mt-6 text-center text-sm text-white">
              Remember your password?{" "}
              <Link to="/login" className="underline font-medium">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
