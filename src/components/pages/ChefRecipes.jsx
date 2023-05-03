import React from "react";
import { useLoaderData } from "react-router-dom";

const ChefRecipes = () => {
  const chefRecipesData = useLoaderData();
  const {
    id,
    picture,
    name,
    bio,
    yearsOfExperience,
    nationality,
    numRecipes,
    likes,
  } = chefRecipesData;
  console.log(chefRecipesData);

  return (
    <div>
      <div className="w-full gap-12  bg-amber-600 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-24">
        <div className="col-start-1 col-end-2">
          <img src={picture} className="w-72 h-72 object-cover" />
        </div>
        <div className="col-start-1 md:col-start-2 lg:col-start-2 col-end-2 md:col-end-3 lg:col-end-4">
          <h2 className="text-4xl primary_text font-semibold underline underline-offset-4 ">
            {name}
          </h2>
          <p className="my-7 primary_text text-white font-normal text-sm ">
            {bio}
          </p>
          <p className="font-semibold primary_text text-white pb-1">
            <span className="text-base text-slate-800 ">Nationality : </span>
            <span className="text-sm tracking-widest  text-white">
              {nationality}
            </span>
          </p>
          <p className="font-semibold primary_text text-white pb-1">
            <span className="text-base text-slate-800 ">
              Years of Experience :{" "}
            </span>
            <span className="text-sm text-white tracking-widest">
              {yearsOfExperience}
            </span>
          </p>
          <p className="font-semibold primary_text text-white pb-1">
            <span className="text-base text-slate-800 ">Recipes : </span>
            <span className="text-sm text-white tracking-widest ">
              {numRecipes}
            </span>
          </p>
          <p className="font-semibold primary_text text-white">
            <span className="text-base text-slate-800 ">Likes : </span>
            <span className="text-sm text-white tracking-widest">{likes}+</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChefRecipes;
