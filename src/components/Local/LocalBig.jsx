import React, { useState } from "react";
import { local, lugares } from "./locations";
import Maps from "../Maps/Maps";

function LocalBig() {
  const [longLat, setLongLat] = useState({
    latitud: 25.730003567445728,
    long: -100.2858830518688,
  });

  const [view, setView] = useState(3.3);

  function handleShowMap(long, lat) {
    setLongLat({
      latitud: lat,
      long: long,
    });

    setView(3);

    setTimeout(() => {
      const intervalId = setInterval(() => {
        setView(10);
      }, 2000);
    });
  }

  return (
    <>
      <div className="px-6   mx-auto  pb-10 ">
        <div className="flex gap-10 justify-center mt-20">
          <div className="">
            <h1 className="text-3xl font-bold  text-nowrap">
              Esta es Nuestra Sucurrsal
            </h1>
            <div className="mt-3">
              <button
                onClick={() => handleShowMap(local.longitud, local.latitud)}
                className="relative h-13 w-13 overflow-hidden rounded bg-[#1a1a61f4] px-5 py-2.5 text-white transition-all duration-300 hover:bg-neutral-800 hover:ring-2 hover:ring-neutral-800 hover:ring-offset-2"
              >
                <span className="relative">{local.nombre}</span>
              </button>
            </div>
            <p className="mt-2 text-lg">{local.description}</p>
          </div>
          <div>
            <h1 className="  text-xl  font-bold mb-5">
              De estos Lugares provienen nuestras Papas
            </h1>
            <div className="flex flex-wrap gap-3 justify-center">
              {lugares.map((item, index) => (
                <div key={index}>
                  <button
                    onClick={() => handleShowMap(item.longitud, item.latitud)}
                    className="relative h-13 w-13 overflow-hidden rounded bg-[#1a1a61f4] px-5 py-2.5 text-white transition-all duration-300 hover:bg-neutral-800 hover:ring-2 hover:ring-neutral-800 hover:ring-offset-2"
                  >
                    <span className="relative">{item.nombre}</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-10 flex justify-center">
          <Maps array={longLat} larg="700px" heith="300px" view={view} />
        </div>
      </div>
    </>
  );
}

export default LocalBig;
