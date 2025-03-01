import React from 'react'

const Header = () => {
  return (
    <div className="z-10 w-full absolute px-8 py-2 bg-gradient-to-b from-black ">
      <div className="flex justify-between">
        <img
          className="w-44"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="Netflix Logo"
        />
        <a className="text-white text-4xl" href="/">
          Sign In
        </a>
      </div>
    </div>
  );
}

export default Header