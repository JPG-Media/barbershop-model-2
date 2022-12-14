import React from "react";
import { team } from "../data/constants";
import TeamCard from "./TeamCard";

const Team = () => {
  return (
    <div className="w-full px-24 pb-10 flex  justify-center items-center font-text">
      <section className="text-secondary body-font">
        <div className="container  mx-auto flex flex-col justify-center items-center">
          
            {team.map((member, index) => {
              return <TeamCard key={index} {...member} />;
            })}
        </div>
      </section>
    </div>
  );
};

export default Team;
