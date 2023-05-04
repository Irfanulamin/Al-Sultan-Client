import React, { useEffect, useState } from "react";
import Carousel from "./Carousel";
import ChefsSection from "./ChefsSection";

const Home = () => {
  const [chefsData, setChefsData] = useState([]);
  const [value, setValue] = useState(20);
  console.log(chefsData);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((value) => value + 10);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    fetch("https://al-sultans-server-irfanulamin.vercel.app/chefs/")
      .then((res) => res.json())
      .then((data) => setChefsData(data));
  }, []);

  return (
    <div>
      <Carousel></Carousel>
      {chefsData.length === 0 && (
        <div className="flex justify-center items-center p-72">
          <progress
            id="my-progress"
            className="radial-progress text-amber-600/90"
            style={{ "--value": value }}
          />
        </div>
      )}
      {chefsData.length !== 0 && (
        <ChefsSection chefsData={chefsData}></ChefsSection>
      )}
    </div>
  );
};

export default Home;
