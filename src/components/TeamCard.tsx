import React from "react";

const TeamCard = ({photo, name, job, desc, social}:any) => {
  return (
    <div  className="p-10 flex justify-start items-start w-4/5">
      <div className="h-full flex sm:flex-row flex-col items-start sm:justify-start justify-center text-center sm:text-left">
        <img
          alt="team"
          className="flex-shrink-0 rounded w-48 h-64 object-cover object-center sm:mb-0 mb-4"
          src={photo}
        />
        <div className="flex-grow sm:pl-8">
          <h2 className="title-font font-medium text-lg text-blend">
            {name}
          </h2>
          <h3 className="text-dimWhite mb-3 font-primary">{job}</h3>
          <p className="mb-4 font-primary text-dimWhite">{desc}</p>
          <span className="inline-flex">{social}</span>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
