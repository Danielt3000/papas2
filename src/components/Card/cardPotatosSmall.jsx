import React, { useState, useRef } from "react";
import { Card, Carousel, Button, Tabs } from "flowbite-react";
import CardInside from "./CardInside";
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

function CardPotatosSmall() {
  const [activeTab, setActiveTab] = useState(0);

  const items = [
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
      <h1 className="text-center text-4xl font-bold mt-16 ">
        Nuestros Productos
      </h1>

      <div className="">
        <Tabs
          aria-label="Default tabs"
          style="default"
          onActiveTabChange={(tab) => setActiveTab(tab)}
          className="flex justify-center"
        >
          <Tabs.Item active title={items[0].nombre}>
            <CardInside items={items[0]} activeTab={activeTab} />

            <p className="w-10/12 mx-auto px-2 font-medium mt-4">
              {items[0].descripcion}
            </p>
          </Tabs.Item>
          <Tabs.Item title={items[1].nombre}>
            <CardInside items={items[1]} activeTab={activeTab} />
            <p className="w-10/12 mx-auto px-2 font-medium mt-4 text-left">
              {items[1].descripcion}
            </p>
          </Tabs.Item>
          <Tabs.Item title={items[2].nombre}>
            <CardInside items={items[2]} activeTab={activeTab} />
            <p className="w-10/12 mx-auto px-2 font-medium mt-4">
              {items[2].descripcion}
            </p>
          </Tabs.Item>
        </Tabs>
      </div>

      <div className="container m-auto px-6">
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 mt-1">
          <Carousel pauseOnHover>
            <img src={items[activeTab].carousel[0]} alt="..." />
            <img src={items[activeTab].carousel[1]} alt="..." />
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default CardPotatosSmall;
