import React from 'react'
import ServicesCard from './ServicesCard'
import { services } from "../data/constants/index";
import BookNow from './BookNow';

const Services = () => {



    return (
    <div className='py-8 w-full flex flex-col gap-8 justify-center items-center'>
      {services.map((service, index) => {
        const name = service.name;
        const description = service.description;
        const price = service.price;

        return (
                <ServicesCard 
                key={index}
                name={name} 
                description={description} 
                price={price}/>
        )
      })}
      <div className=" flex justify-center items-center w-full p-10 text-3xl font-text font-semibold">
              <BookNow />
            </div>
    </div>
  )
}

export default Services 