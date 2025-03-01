import React from 'react';
import Header from './Header';

const Login = () => {
  return (
    <>
      <Header />
      <div className="relative w-full h-screen flex items-center justify-center">
        
        {/* Background Image */}
        <img 
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a09bb938-2d90-42ae-986e-5a3e4abf9e77/8eb1e781-3494-4aa4-9405-268ca6473e4c/IN-en-20231113-popsignuptwoweeks-perspective_alpha_website_large.jpg" 
          alt="BackgroundBanner" 
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]" 
        />

        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-0" />


        <div className="relative z-10 bg-black opacity-75 p-12 rounded-md w-[400px] flex flex-col gap-6">
          <h2 className="text-white text-3xl font-bold text-center">Sign In</h2>
          
          <input 
            type="email" 
            name="email" 
            placeholder="Email or phone number" 
            className="p-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />

          <input 
            type="password" 
            name="password" 
            placeholder="Password" 
            className="p-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />

          <button 
            type="submit" 
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-md cursor-pointer">
            Sign In
          </button>

          <div className="flex justify-between text-gray-400 text-sm">
            <label className="flex items-center gap-1">
              <input type="checkbox" className="accent-red-600" /> Remember me
            </label>
            <span className="cursor-pointer hover:underline">Need help?</span>
          </div>

          <p className="text-gray-400 text-center">
            New to Netflix? <span className="text-white cursor-pointer hover:underline">Sign up now</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
