import React from "react";

const Banner = () => {
  return (
    <section className="banner md:block lg:block hidden">
      <div className="w-full h-full flex flex-col justify-center items-center ">
        <div>
          <p className="text-3xl font-medium text-white primary_text text-center">
            <span className="text-amber-600 mx-3 text-4xl">"</span>
            The cuisine of the
            <span className="text-amber-600 font-bold"> Middle East</span> is a
            reflection <br /> of the region's diverse cultures and rich history
            <span className="text-amber-600 mx-3 text-4xl">"</span>
          </p>
        </div>
        <div>
          <div>
            <p className="text-white text-lg font-normal mt-1">
              <small>
                Explore the Middle Eastern recipes with experienced chefs from
                all over Western Asia region
              </small>
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-4 mt-7">
          <button className="btn rounded-sm border-none hover:bg-white bg-amber-600 hover:text-amber-600 border-white text-white ">
            Trending Blogs
          </button>
          <button className="btn rounded-sm btn-outline border-white hover:border-amber-600 hover:text-amber-600 text-white hover:bg-transparent ">
            Explore More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
