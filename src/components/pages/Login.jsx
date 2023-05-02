import React from "react";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex flex-col gap-x-24 justify-center items-center lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-6xl font-bold text-slate-950 underline">
            Login now!
          </h1>
          <p className="py-6 font-medium text-lg">
            <span className="text-3xl font-bold italic text-amber-600">"</span>
            Login the website for more exclusive access to personalized content,
            special offers, and a seamless user experience. Don't miss out on
            the benefits!
            <span className="text-3xl font-bold italic text-amber-600">"</span>
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div>
              <UserCircleIcon className="h-24 w-24 m-auto "></UserCircleIcon>
            </div>
            <hr className="border border-slate-950 mt-5 mb-2" />
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  New to the Website ?{" "}
                  <span>
                    <Link to="/register">Register now!</Link>
                  </span>
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn  hover:bg-amber-600 bg-slate-950 border-0">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
