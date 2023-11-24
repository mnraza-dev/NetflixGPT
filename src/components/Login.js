import React, { useState } from 'react'
import Header from './Header';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true)

  const toggleSignInForm =()=>{
    setIsSignInForm(!isSignInForm)
  }

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a09bb938-2d90-42ae-986e-5a3e4abf9e77/8eb1e781-3494-4aa4-9405-268ca6473e4c/IN-en-20231113-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="BackgroundBanner"
        />
      </div>
      <form className="bg-opacity-80 rounded-lg  text-white w-4/12 my-36 mx-auto absolute right-0 left-0  bg-black p-12">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            className="bg-gray-700   p-4 my-4 w-full"
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          className="bg-gray-700   p-4 my-4 w-full"
          type="text"
          placeholder="Email address"
        />
        <input
          className="bg-gray-700   p-4 my-4 w-full"
          type="password"
          placeholder="Password"
        />
        <button className="p-4 my-6 w-full bg-red-700">{isSignInForm?"Sign In":"Sign Up"}</button>
        <p className="cursor-pointer py-6" onClick={toggleSignInForm}>
          {isSignInForm
            ? "  New to Netflix?  Sign up now."
            : "Already Registered? Sign in now"}
        </p>
      </form>
    </div>
  );
}

export default Login