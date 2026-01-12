// import React from "react";
// import Vector from "../assets/images/Vector.png";
// import Doctor from "../assets/images/Doctor.png";

// export default function ResetPassword() {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-black">
//       <div className="relative w-full max-w-7xl h-[90vh] rounded-xl overflow-hidden bg-linear-to-br from-teal-700 to-emerald-400">
   
//         <img
//           src={Vector}
//           alt="Background Shape"
//           className="absolute right-0 top-0 h-full object-cover pointer-events-none"
//         />

    
//         <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 h-full">

//           <div className="hidden lg:flex items-center justify-center">
//             <img
//               src={Doctor}
//               alt="Reset Illustration"
//               className="max-w-[90%]"
//             />
//           </div>

          
//           <div className="flex items-center justify-center px-6">
//             <div className="w-full max-w-md bg-white/15 backdrop-blur-lg rounded-2xl p-10 shadow-xl">
          
//               <div className="flex justify-center mb-6">
//                 <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center">
//                   <span className="text-teal-600 font-bold text-sm">LOGO</span>
//                 </div>
//               </div>

            
//               <h2 className="text-2xl font-bold text-white text-center">
//                 Reset Your Password
//               </h2>

//               <p className="text-sm text-white/80 text-center mt-2">
//                 Enter the email address associated with your account and we'll
//                 send you a link to reset your password
//               </p>

            
//               <form className="mt-8 space-y-5">
//                 <div>
//                   <label className="block text-sm text-white mb-2">
//                     Email Address
//                   </label>
//                   <input
//                     type="email"
//                     placeholder="Enter your username or email"
//                     className="w-full px-4 py-3 rounded-full bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-400"
//                   />
//                 </div>

//                 <button
//                   type="submit"
//                   className="w-full py-3 rounded-full bg-teal-400 hover:bg-teal-500 transition font-semibold text-gray-900"
//                 >
//                   Send Reset Link
//                 </button>

//                 <div className="text-center">
//                   <a
//                     href="/login"
//                     className="text-sm text-white underline hover:text-teal-200"
//                   >
//                     Back to login
//                   </a>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
