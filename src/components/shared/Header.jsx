import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Header = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <div className="navbar py-6  bg-slate-900 px-7 flex gap-y-10 flex-col items-center justify-center md:flex-row lg:flex-row">
        <div className="navbar-start">
          <div className="flex  items-center justify-center  gap-x-6">
            <Link
              className="uppercase text-xs font-normal primary_text tracking-wide text-white"
              to="/"
            >
              Home
            </Link>
            <Link
              className="uppercase text-xs font-normal primary_text tracking-wide text-white"
              to="/about"
            >
              About
            </Link>
            <Link
              className="uppercase text-xs font-normal primary_text  tracking-wide text-white"
              to="/blogs"
            >
              Blogs
            </Link>
          </div>
        </div>
        <div className="navbar-center">
          <div className="flex flex-col items-center justify-center">
            <div>
              <Link
                to="/"
                className="logo_font text-white font-semibold tracking-widest text-5xl"
              >
                Al-sultan<span className="text-amber-600 text-3xl">س</span>
              </Link>
            </div>
            <div>
              <p className=" text-white text-center">
                <small>
                  Explore the rich flavors of Arabic cuisine one dish at a time!
                </small>
              </p>
            </div>
          </div>
        </div>
        <div className="navbar-end flex flex-col md:flex-row lg:flex-row gap-y-2">
          {user && (
            <div className="avatar">
              <div className="w-7 rounded-full ring  ring-amber-600 ring-offset-base-100 ring-offset-2">
                <img src="" />
              </div>
            </div>
          )}
          <div className="flex">
            {!user && (
              <Link
                to="/login"
                className="primary_text btn btn-ghost btn-xs text-amber-600 hover:bg-transparent"
              >
                Login
              </Link>
            )}
            {!user && (
              <Link
                to="/register"
                className="primary_text btn btn-ghost btn-xs text-amber-600 hover:bg-transparent"
              >
                Register
              </Link>
            )}
            {/* Username on hover of pfp */}
            {user && (
              <button className="primary_text btn btn-ghost btn-xs text-amber-600 hover:bg-transparent">
                LogOut
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
