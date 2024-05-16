import React from "react";
import { Card, Carousel } from "flowbite-react";
import fina1 from "./assets/fina1.png";
import fina2 from "./assets/fina2.png";
import fina3 from "./assets/fina3.png";
import fina4 from "./assets/fina4.png";
import agata1 from "./assets/agata1.png";
import agata2 from "./assets/agata2.png";
import agata3 from "./assets/agata3.png";
import agata4 from "./assets/agata4.png";
import ota1 from "./assets/ota1.png";
import ota2 from "./assets/ota2.png";
import ota3 from "./assets/ota3.png";
import ota4 from "./assets/ota4.png";
import left from "../assets/left.png";
import right from "../assets/right.png";

function CardPotatos() {
  const img = [
    {
      img: fina1,
      nombre: "Papa Fina",
      carousel: [fina2, fina3, fina4],

      descripcion:
        " Versátil tubérculo cultivado globalmente, esencial en la dieta, valorado por su sabor y textura en diversas preparaciones culinarias.",
    },
    {
      img: agata1,
      nombre: "Papa Agata",
      carousel: [agata2, agata3, agata4],

      descripcion:
        "  piel fina, carne amarilla, apreciada por su sabor y textura en diferentes platillos.",
    },
    {
      img: ota1,
      nombre: "Papa Orquesta",
      carousel: [ota2, ota3, ota4],

      descripcion:
        "  Tubérculo excepcional, reconocido por su amplia gama de formas y sabores, una verdadera variedad culinaria.",
    },
  ];

  return (
    <div>
      <h1 className="text-center text-4xl font-bold ">Nuestros Productos</h1>
      <div className="flex  justify-around gap-7  mx-auto max-w-[1200px] h-[250px]  mt-10">
        {img.map((item) => {
          return (
            <div key={Math.random(2 * 23)} className=" w-[400px] h-[300px]">
              <div className="bg-[#242c6c]  rounded-xl ">
                <h1 className="text-2xl font-bold ml-2 pt-2 text-white  ">
                  {item.nombre}
                </h1>
                <div className="mt-6 ">
                  <Carousel pauseOnHover className="w-full h-[150px]">
                    <img
                      className=" object-cover  w-full h-[200px]"
                      src={item.carousel[0]}
                      alt=""
                    />
                    <img src={item.carousel[1]} alt="" />
                    <img src={item.carousel[2]} alt="" />
                  </Carousel>
                </div>
                <div className="bg-[#ffff] ">
                  <p className=" pt-3 ml-3 text-xl">
                    <span className="font-bold "> {item.nombre}</span>:
                    {item.descripcion}`
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CardPotatos;
