import React, { useContext, useState } from "react";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const Register = () => {
  const { signUp, signInWithGoogle, signInWithGithub } =
    useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form?.email?.value;
    const password = form?.password?.value;
    // const displayName = form?.name?.value;
    // const photoUrl = form?.photoUrl?.value;

    setError("");
    if (email.length == 0 || password.length == 0) {
      setError("A user cannot submit empty email or password field");
      return;
    } else if (password.length < 6) {
      setError("The password is less than 6 characters");
      return;
    }
    signUp(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        navigate("/");
      })
      .catch((err) => setError(err.message));
  };

  const handleGoogleSignIn = () => {
    setError(" ");
    signInWithGoogle()
      .then((res) => {
        const user = res.user;
        console.log(user);
        navigate("/");
      })
      .catch((err) => setError(err.message));
  };

  const handleGitHubSignIn = () => {
    signInWithGithub()
      .then((res) => {
        const user = res.user;
        console.log(user);
        navigate("/");
      })
      .catch((err) => setError(err.message));
  };

  return (
    <div className="hero page_screen bg-base-200">
      <div className="hero-content flex flex-col gap-x-24 justify-center items-center lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-6xl font-bold text-slate-950 underline decoration-amber-600">
            Register now!
          </h1>
          <p className="py-6 font-medium text-lg">
            <span className="text-3xl font-bold italic text-amber-600">"</span>
            Register the website for more exclusive access to personalized
            content, special offers, and a seamless user experience. Don't miss
            out on the benefits , register now!
            <span className="text-3xl font-bold italic text-amber-600">"</span>
          </p>
        </div>
        <div className="card card-body flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister}>
            <div>
              <UserCircleIcon className="h-24 w-24 m-auto "></UserCircleIcon>
            </div>
            <hr className="border border-slate-950 mt-5 mb-2" />
            <div className="form-control">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input
                type="text"
                placeholder="name"
                className="input input-bordered"
                name="name"
                id="name"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                name="password"
                id="password"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="url"
                name="photoUrl"
                id="photoUrl"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Already have an accout?{" "}
                  <span>
                    <Link to="/login">Login Now!</Link>
                  </span>
                </a>
              </label>
            </div>
            {error && (
              <p className="text-red-600 font-medium text-base">{error}</p>
            )}
            <div className="form-control mt-3">
              <button
                type="submit"
                className="btn  hover:bg-amber-600 bg-slate-950 border-0"
              >
                Register
              </button>
            </div>
          </form>
          <div className="form-control mt-3">
            <div
              className="flex justify-center items-center btn btn-outline gap-x-2 hover:border-none text-black hover:text-black border-blue-600 hover:bg-amber-500"
              onClick={handleGoogleSignIn}
            >
              <div>
                <p>Sign in with Google</p>
              </div>
              <div>
                <FcGoogle className="h-6 w-6"></FcGoogle>
              </div>
            </div>
          </div>
          <div className="form-control mt-3">
            <div
              className="flex justify-center items-center btn btn-outline gap-x-2 hover:border-none text-black hover:text-black border-black hover:bg-amber-500"
              onClick={handleGitHubSignIn}
            >
              <div>
                <p>Sign in with GitHub</p>
              </div>
              <div>
                <FaGithub className="h-6 w-6"></FaGithub>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
