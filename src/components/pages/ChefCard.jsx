import React from "react";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazy-load";

const ChefCard = ({ chefData }) => {
  const {
    id,
    picture,
    name,
    yearsOfExperience,
    nationality,
    numRecipes,
    likes,
  } = chefData;
  return (
    <div className="bg-stone-100 p-2 md:p-4 lg:p-4  border-2 border-slate-950 ">
      <div className=" border-none  bg-stone-100  flex flex-col md:flex-row lg:flex-row">
        <div className="p-2 md:p-6 lg:p=6">
          <LazyLoad threshold={0.95}>
            <img
              src={picture}
              className="w-40 h-40 object-cover border-2 border-amber-600 "
            />
          </LazyLoad>
        </div>
        <div className="p-5">
          <h2 className="text-3xl mb-3 primary_text font-semibold underline underline-offset-4 decoration-amber-600">
            {name}
          </h2>
          <p className="font-semibold primary_text text-black">
            <span className="text-lg ">Nationality : </span>
            <span className="text-base tracking-widest  text-amber-600">
              {nationality}
            </span>
          </p>
          <p className="font-semibold primary_text text-black">
            <span className="text-lg ">Years of Experience : </span>
            <span className="text-base text-amber-600 tracking-widest">
              {yearsOfExperience}
            </span>
          </p>
          <p className="font-semibold primary_text text-black">
            <span className="text-lg ">Recipes : </span>
            <span className="text-base text-green-600 tracking-widest ">
              {numRecipes}
            </span>
          </p>
          <p className="font-semibold primary_text text-black">
            <span className="text-lg ">Likes : </span>
            <span className="text-base text-green-600 tracking-widest">
              {likes}+
            </span>
          </p>
        </div>
      </div>
      <div className="card-actions justify-end ">
        <Link
          to={`chefs/${id}`}
          className="btn btn-outline primary_text capitalize text-amber-600 border-amber-600 rounded-sm text-base  hover:bg-amber-600/90 hover:border-amber-600 hover:font-normal"
        >
          View Recipes
        </Link>
      </div>
    </div>
  );
};

export default ChefCard;
