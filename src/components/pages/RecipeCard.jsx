import React, { useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const RecipeCard = ({ recipe, addToFavourite }) => {
  const [add, setAdd] = useState(false);

  function handleBothClicks() {
    addToFavourite();
    handleAdded();
  }

  const handleAdded = () => {
    setAdd(true);
  };
  const { name, ingredients, rating, cooking_method } = recipe;

  return (
    <>
      <div className="rounded-sm border border-slate-950">
        <div className="p-4 md:p-10 lg:p-10">
          <h2 className="text-center  font-bold text-4xl primary_text text-amber-600">
            {name}
          </h2>
          <hr className="my-3 border border-slate-950" />
          <h2 className="primary_text font-bold text-lg underline">
            Ingredients :
          </h2>
          {ingredients.map((ingredient) => (
            <p className="primary_text uppercase font-semibold text-xs">
              . {ingredient}
            </p>
          ))}
          <p className="primary_text  font-bold text-base">
            <span className=" text-amber-600 underline decoration-amber-600">
              Cooking Method
            </span>
            <span> : {cooking_method}</span>
          </p>
          <p className="primary_text  font-bold text-base">
            <span className="underline mb-2">Ratings</span>
            <span className="text-rose-600">
              <Rating
                style={{ maxWidth: 120 }}
                value={Math.round(rating)}
                readOnly
              />
            </span>
          </p>
          <div className="card-actions mt-4 justify-end">
            <button
              onClick={handleBothClicks}
              className={` ${
                add ? "btn-disabled" : "bg-rose-600 hover:bg-rose-500"
              } btn btn-xs rounded-sm   primary_text border-none  `}
            >
              Add to favourite
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipeCard;
