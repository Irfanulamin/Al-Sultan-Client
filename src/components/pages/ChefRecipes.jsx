import React from "react";
import { useLoaderData } from "react-router-dom";
import RecipeCard from "./RecipeCard";
import { MdRestaurant } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LazyLoad from "react-lazy-load";

const ChefRecipes = () => {
  const chefRecipesData = useLoaderData();
  const {
    picture,
    name,
    bio,
    yearsOfExperience,
    nationality,
    numRecipes,
    likes,
    recipes,
  } = chefRecipesData;

  const addToFavourite = () => {
    toast.success("Added to Favourite 📝!", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  return (
    <div>
      <div className="w-full gap-12  bg-amber-600 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-24">
        <div className="col-start-1 col-end-2">
          <LazyLoad threshold={0.95}>
            <img src={picture} className="w-72 h-72 object-cover" />
          </LazyLoad>
        </div>
        <div className="col-start-1 md:col-start-2 lg:col-start-2 col-end-2 md:col-end-3 lg:col-end-4">
          <div className="flex">
            <h2 className="text-4xl primary_text font-semibold underline underline-offset-4 ">
              {name}
            </h2>
            <MdRestaurant className="h-6 w-6 text-white" />
          </div>
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
      <div>
        <h2 className="text-center mt-10 text-5xl font-bold primary_text underline underline-offset-8 decoration-amber-600">
          Recipes of {name}
        </h2>
      </div>
      <div className="p-12 grid grid-cols-1 lg:grid-cols-2 gap-24 w-full ">
        {recipes.map((recipe, index) => (
          <RecipeCard
            recipe={recipe}
            key={index}
            addToFavourite={addToFavourite}
          ></RecipeCard>
        ))}
      </div>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default ChefRecipes;
