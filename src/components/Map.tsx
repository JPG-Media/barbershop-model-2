import React from "react";
import { useMemo } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import BarberPole from "./BarberPole";
import { barbershopInfo } from "../data/constants";
import BookNow from "./BookNow";

const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
  });

  if (!isLoaded)
    return (
      <div>
        <BarberPole />
      </div>
    );
  return <GMap />;
};

function GMap() {
  const sharpoetry = useMemo(()=>({ lat: barbershopInfo.latitude, lng: barbershopInfo.longitude }), []);

  return (
    <div className="w-full h-full flex justify-center items-center flex-col gap-5">
      <GoogleMap
        zoom={13}
        center={sharpoetry}
        mapContainerClassName="w-full h-full rounded-tl-3xl rounded-br-3xl"
      >
        <MarkerF position={sharpoetry} label='Big Dawg Barber'/>
      </GoogleMap>

      <a className="text-2xl font-semibold py-4">
        <BookNow name='Get Directions'/>
      </a>
    </div>
  );
}

export default Map;
