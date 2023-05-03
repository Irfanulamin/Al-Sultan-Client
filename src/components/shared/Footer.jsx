import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer p-24 bg-base-200 ">
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
          <span className="font-semibold text-xl  text-amber-600">Contact</span>
          <a className="link link-hover primary_text">Phone : XXX XXXX XXXX</a>
          <a className="link link-hover primary_text">Instagram</a>
          <a className="link link-hover primary_text">Facebook</a>
          <a className="link link-hover primary_text">
            Email : user@example.com
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
