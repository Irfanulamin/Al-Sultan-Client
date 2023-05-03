import React, { useEffect, useState } from "react";
import Carousel from "./Carousel";
import ChefsSection from "./ChefsSection";

const Home = () => {
  const [chefsData, setChefsData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/chefs")
      .then((res) => res.json())
      .then((data) => setChefsData(data));
  }, []);

  console.log(chefsData);

  return (
    <div>
      <Carousel></Carousel>
      <ChefsSection chefsData={chefsData}></ChefsSection>
    </div>
  );
};

export default Home;
