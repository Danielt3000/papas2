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

function CardPotatos() {
  const img = [
    {
      img: fina1,
      nombre: "Papa Fina",
      carousel: [fina2, fina3, fina4],

      descripcion:
        " Papa Fina: Versátil tubérculo cultivado globalmente, esencial en la dieta, valorado por su sabor y textura en diversas preparaciones culinarias.",
    },
    {
      img: agata1,
      nombre: "Papa Agata",
      carousel: [agata2, agata3, agata4],

      descripcion:
        " Agatha: piel fina, carne amarilla, apreciada por su sabor y textura en diferentes platillos.",
    },
    {
      img: ota1,
      nombre: "Papa Orquesta",
      carousel: [ota2, ota3, ota4],

      descripcion:
        " Papa Orquesta: Tubérculo excepcional, reconocido por su amplia gama de formas y sabores, una verdadera variedad culinaria.",
    },
  ];

  return (
    <div className="mt-10">
      <h1 className="text-center text-4xl font-bold ">Nuestros Productos</h1>
      <div className="flex flex-wrap justify-center gap-10 mt-10">
        {img.map((item) => {
          return (
            <div key={Math.random(2 * 23)}>
              <div>
                <Card
                  className="max-w-sm w-[100%] bg-[#1a1a61f4] "
                  imgSrc={item.img}
                >
                  {/* <img
                    className="w-full h-48 object-cover p-0"
                    src={item.img}
                    alt="Potato1"
                  /> */}
                  <div className="p-0">
                    <h5 className="text-xl font-semibold tracking-tight text-white text-center mt-2 dark:text-white">
                      {item.nombre}
                    </h5>
                  </div>
                </Card>
              </div>

              <div className="h-[300px] mt-5 w-[300px]  rounded-md ml-6">
                <Carousel pauseOnHover>
                  <img
                    className="object-contain w-full h-full"
                    src={item.carousel[0]}
                    alt=""
                  />
                  <img
                    className="object-contain w-full h-full"
                    src={item.carousel[1]}
                    alt=""
                  />
                  <img
                    className="object-contain w-full h-full"
                    src={item.carousel[2]}
                    alt=""
                  />
                </Carousel>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CardPotatos;
