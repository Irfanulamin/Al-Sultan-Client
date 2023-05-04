import React, { useEffect, useState } from "react";
import ChefsSection from "./ChefsSection";
import Banner from "./Banner";
import TypesOfChefSection from "./TypesOfChefSection";

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
    fetch("https://al-sultans-server.vercel.app/chefs")
      .then((res) => res.json())
      .then((data) => setChefsData(data));
  }, []);

  return (
    <div>
      <Banner></Banner>
      <TypesOfChefSection></TypesOfChefSection>
      {chefsData.length === 0 && (
        <div className="flex justify-center items-center w-full h-full my-12 md:my-24 lg:my-24">
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
