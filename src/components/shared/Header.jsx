import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [hovered, setHovered] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then((res) => {
        const user = res.user;
        console.log(user);
      })
      .catch((err) => err.message);
  };

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <>
      <div className="navbar py-6  bg-slate-900 px-7 flex gap-y-10 flex-col items-center justify-center md:flex-row lg:flex-row ">
        <div className="navbar-start">
          <div className="flex  items-center justify-center  gap-x-6">
            <NavLink
              className={({ isActive }) =>
                isActive ? "is_active" : "not_active"
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "is_active" : "not_active"
              }
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "is_active" : "not_active"
              }
              to="/blogs"
            >
              Blogs
            </NavLink>
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
        <div className="navbar-end flex flex-col items-center md:flex-row lg:flex-row gap-y-2">
          {user?.photoURL && (
            <div className="avatar">
              <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="w-7 mr-2 rounded-full ring  ring-amber-600 ring-offset-base-100 ring-offset-2"
              >
                <img src={user.photoURL} />
              </div>
            </div>
          )}
          {hovered && (
            <div>
              <p
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="text-sm font-medium tracking-wider primary_text text-white"
              >
                {user.displayName}
              </p>
            </div>
          )}

          {!user && (
            <div className="mr-2">
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? "is_active" : "not_active"
                }
              >
                Login
              </NavLink>
            </div>
          )}
          {!user && (
            <div>
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  isActive ? "is_active" : "not_active"
                }
              >
                Register
              </NavLink>
            </div>
          )}
          {user && (
            <div onClick={handleLogOut}>
              <button
                to="/login"
                className="primary_text btn btn-ghost btn-xs text-amber-600 hover:bg-transparent"
              >
                LogOut
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
