import React from "react";
import { Link } from "react-router-dom";
import { CheckBadgeIcon } from "@heroicons/react/24/outline";

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
    <div className="bg-white p-2">
      <div className=" border-none  bg-white flex flex-col md:flex-row lg:flex-row">
        <div className="p-2 md:p-6 lg:p=6">
          <img
            src={picture}
            className="w-40 h-40 object-cover border border-slate-950 p-2"
          />
        </div>
        <div className="p-5">
          <h2 className="text-2xl primary_text font-semibold underline underline-offset-4 decoration-amber-600">
            {name}
          </h2>
          <p className="font-semibold primary_text text-black">
            <span className="text-sm ">Nationality : </span>
            <span className="text-xs tracking-widest  text-amber-600">
              {nationality}
            </span>
          </p>
          <p className="font-semibold primary_text text-black">
            <span className="text-sm ">Years of Experience : </span>
            <span className="text-xs text-amber-600 tracking-widest">
              {yearsOfExperience}
            </span>
          </p>
          <p className="font-semibold primary_text text-black">
            <span className="text-sm ">Recipes : </span>
            <span className="text-xs text-green-600 tracking-widest ">
              {numRecipes}
            </span>
          </p>
          <p className="font-semibold primary_text text-black">
            <span className="text-sm ">Likes : </span>
            <span className="text-xs text-green-600 tracking-widest">
              {likes}+
            </span>
          </p>
        </div>
      </div>
      <div className="card-actions justify-end ">
        <Link
          to={`chefs/${id}`}
          className="btn btn-outline btn-sm primary_text capitalize text-amber-600 border-amber-600 rounded-sm text-xs  hover:bg-amber-600/90 hover:border-amber-600 hover:font-normal"
        >
          View Recipes
        </Link>
      </div>
    </div>
  );
};

export default ChefCard;
