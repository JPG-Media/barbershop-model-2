import React from 'react'
import { team } from '../data/constants'

const Team = () => {
  return (
    <div className='w-full px-24 pb-10 flex  justify-center items-center font-text'>
        <section className="text-secondary body-font">
  <div className="container  mx-auto">
    <div className="flex flex-col justify-center items-center">
      {team.map((member)=>{
        return <div className="p-10 flex justify-start items-start w-4/5">
        <div className="h-full flex sm:flex-row flex-col items-start sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" className="flex-shrink-0 rounded w-48 h-64 object-cover object-center sm:mb-0 mb-4" src={member.photo}/>
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-lg text-blend">{member.name}</h2>
            <h3 className="text-dimWhite mb-3 font-primary">{member.job}</h3>
            <p className="mb-4 font-primary text-dimWhite">{member.desc}</p>
            <span className="inline-flex">
              {member.social}
            </span>
          </div>
        </div>
      </div>
      })}
      
    </div>
  </div>
</section>
    </div>
  )
}

export default Team