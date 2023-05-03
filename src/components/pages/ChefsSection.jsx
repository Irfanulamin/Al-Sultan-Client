import React from "react";
import ChefCard from "./ChefCard";

const ChefsSection = ({ chefsData }) => {
  return (
    <div className="grid grid-cols-1 py-16 bg-slate-950 lg:grid-cols-2 gap-12 w-full px-16">
      {chefsData.map((chefData) => (
        <ChefCard chefData={chefData} key={chefData.id}></ChefCard>
      ))}
    </div>
  );
};

export default ChefsSection;
