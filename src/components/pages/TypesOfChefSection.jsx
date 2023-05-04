import React from "react";

const TypesOfChefSection = () => {
  return (
    <div className=" bg-amber-600 py-32">
      <div className="text-center">
        <h2 className="text-6xl primary_text font-bold text-white underline ">
          Types of Chefs
        </h2>
        <p className="text-white primary_text font-semibold text-2xl mt-7">
          <span className="text-black text-3xl">"</span>
          The world of culinary arts is vast and diverse, with a range of
          different types of chefs who specialize in various areas of expertise.
          <span className="text-black text-3xl">"</span>
        </p>
      </div>
      <div className=" mt-12 grid w-full gap-7 px-1 md:px-2 lg:px-24 grid-cols-1 md:grid-cols-3 lg:grid-cols-3  place-items-center">
        <div className="p-7 bg-white mx-4 shadow-lg">
          <h2 className="text-2xl mb-2 font-semibold primary_text p-2 bg-red-700 border border-red-700 text-white  ">
            Expert
          </h2>
          <p className="primary_text text-base font-semibold mb-2 text-black">
            . Focuses on specialized and complex cooking techniques and
            ingredients
          </p>
          <p className="primary_text text-base font-semibold mb-2 text-black">
            . Assumes a high level of culinary knowledge and skill
          </p>
          <p className="primary_text text-base font-semibold mb-2 text-black">
            . May include recipes with multiple components or elaborate plating
          </p>
          <p className="primary_text text-base font-semibold mb-2 text-black">
            . Often explores the cultural origins and history of dishes
          </p>
        </div>
        <div className="p-7  bg-white mx-4">
          <h2 className="text-2xl mb-2 border-none font-semibold primary_text p-2 bg-yellow-500  border border-yellow-500 text-white   ">
            Intermediate
          </h2>
          <p className="primary_text text-base font-semibold mb-2 text-black">
            . Offers a balance of classic and contemporary recipes
          </p>
          <p className="primary_text text-base font-semibold mb-2 text-black">
            . Provides guidance on foundational cooking techniques
          </p>
          <p className="primary_text text-base font-semibold mb-2 text-black">
            . Includes recipes with moderate levels of complexity
          </p>
          <p className="primary_text text-base font-semibold mb-2 text-black">
            . May feature regional or seasonal ingredients
          </p>
        </div>
        <div className="p-7  bg-white  mx-4">
          <h2 className="text-2xl mb-2 border-none font-semibold primary_text p-2 bg-green-700 border border-green-700 text-white   ">
            Rookie
          </h2>
          <p className="primary_text text-base font-semibold mb-2 text-black">
            . Provides basic guidance on kitchen equipment and tools
          </p>
          <p className="primary_text text-base font-semibold mb-2 text-black">
            . Offers easy-to-follow recipes with simple instruction
          </p>
          <p className="primary_text text-base font-semibold mb-2 text-black">
            . Focuses on familiar and approachable dishes
          </p>
        </div>
      </div>
    </div>
  );
};

export default TypesOfChefSection;
