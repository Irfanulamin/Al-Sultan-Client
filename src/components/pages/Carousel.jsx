import React from "react";

const Carousel = () => {
  return (
    <>
      <div className="carousel w-full lg:w-11/12 m-auto pb-6">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            className="w-full h-96 object-cover backdrop-blur-sm"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn text-amber-600 btn-circle ">
              ❮
            </a>
            <a href="#slide2" className="btn text-amber-600 btn-circle ">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://images.unsplash.com/photo-1609167921178-e295a98f808f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
            className="w-full h-96  object-cover backdrop-blur-sm"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn text-amber-600 btn-circle ">
              ❮
            </a>
            <a href="#slide3" className="btn text-amber-600 btn-circle ">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://images.unsplash.com/photo-1574981908840-7f10ab4c4ac3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
            className="w-full h-96 object-cover backdrop-blur-sm"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn text-amber-600 btn-circle ">
              ❮
            </a>
            <a href="#slide4" className="btn text-amber-600 btn-circle ">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            className="w-full h-96 object-cover backdrop-blur-smbackdrop-blur-sm"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn text-amber-600 btn-circle ">
              ❮
            </a>
            <a href="#slide1" className="btn text-amber-600 btn-circle ">
              ❯
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
