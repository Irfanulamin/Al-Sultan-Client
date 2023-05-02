import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer p-10 bg-base-200 text-base-content">
        <div>
          <span className="font-semibold text-xl  text-amber-600">
            Services
          </span>
          <a className="link link-hover primary_text">Chefs</a>
          <a className="link link-hover primary_text">Recipes</a>
          <a className="link link-hover primary_text">Foods</a>
          <a className="link link-hover primary_text">Ingredients</a>
        </div>
        <div>
          <span className="font-semibold text-xl  text-amber-600">Company</span>
          <a className="link link-hover primary_text">About us</a>
          <a className="link link-hover primary_text">Contact</a>
        </div>
        <div>
          <span className="font-semibold text-xl  text-amber-600">Legal</span>
          <a className="link link-hover primary_text">Terms of use</a>
          <a className="link link-hover primary_text">Privacy policy</a>
          <a className="link link-hover primary_text">Cookie policy</a>
        </div>
        <div>
          <span className="font-semibold text-xl  text-amber-600">
            Newsletter
          </span>
          <div className="form-control w-80">
            <label className="label">
              <span className="label-text font-mediu primary_text">
                Enter your email address!
              </span>
            </label>
            <div className="relative">
              <input
                type="text"
                className="input input-bordered w-full pr-16"
              />
              <button className="btn absolute top-0 right-0 rounded-l-none primary_text font-normal">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
