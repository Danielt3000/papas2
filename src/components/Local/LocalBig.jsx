import React, { useState } from "react";
import { local, lugares } from "./locations";
import Maps from "../Maps/Maps";

function LocalBig() {
  const [longLat, setLongLat] = useState({
    latitud: 25.730003567445728,
    long: -100.2858830518688,
  });

  const [view, setView] = useState(4);

  const [array, setArray] = useState({
    img: "http.sx",
    nombre: "El Clasico Regio",
    description:
      "El Clásico Regio, nos enorgullecemos de obtener nuestras papas de las regiones más fértiles y óptimas de México, garantizando productos de la más alta calidad para nuestros clientes.",
    direccion: "Direccion Los Ángeles #1000, Interior 258, Mercado de Abastos",
    link: "https:www.google.com/maps/search/Avenida+Los+%C3%81ngeles+%231000,+Interior+258,+Mercado+de+Abastos+%22Estrella%22,+San+Nicolas+de+los+Garza,+Nuevo+Le%C3%B3n,+M%C3%A9xico/@25.7118751,-100.2960582,17z/data=!3m1!4b1?entry=ttu",
    latitud: 25.730003567445728,
    longitud: -100.2858830518688,
  });

  const descripcion = (latitud) => {
    const found = lugares.find((value) => value.latitud === latitud);
    if (found) {
      setArray(found);
    }
  };

  function handleShowMap(long, lat) {
    setLongLat({
      latitud: lat,
      long: long,
    });
    descripcion(lat);
    setView(3.7);

    setTimeout(() => {
      setView(10);
    }, 2000);
  }

  return (
    <>
      <div className="px-6 mx-auto pb-10">
        <div className="flex gap-10 justify-center mt-20 md:flex-col x:flex-row">
          <div>
            <h1 className="text-3xl font-bold text-nowrap">
              Esta es Nuestra Sucursal
            </h1>
            <div className="mt-3">
              <button
                onClick={() => handleShowMap(local.longitud, local.latitud)}
                className="relative h-13 w-13 overflow-hidden rounded bg-[#1a1a61f4] px-5 py-2.5 text-white transition-all duration-300 hover:bg-neutral-800 hover:ring-2 hover:ring-neutral-800 hover:ring-offset-2"
              >
                <span className="relative">{local.nombre}</span>
              </button>
            </div>
            <p className="mt-2 text-lg italic">{local.direccion}</p>
          </div>
          <div>
            <h1 className="text-xl font-bold mb-5">
              De estos Lugares provienen nuestras Papas
            </h1>
            <div className="flex flex-wrap gap-3 justify-center md:flex">
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
        <div className="text-yellow  max-w-[700px] mx-auto mt-10 text-xl px-4 ">
          <p>{array.description}</p>
        </div>
        <div className="mt-10 flex justify-center">
          <Maps array={longLat} larg="700px" heith="300px" view={view} />
        </div>
      </div>
    </>
  );
}

export default LocalBig;
