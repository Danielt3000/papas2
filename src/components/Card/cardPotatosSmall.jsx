import React, { useState, useRef } from "react";
import { Card, Carousel, Button, Tabs } from "flowbite-react";
import CardInside from "./CardInside";
import * as images from "./photosImport";
function CardPotatosSmall() {
  const [activeTab, setActiveTab] = useState(0);

  const items = [
    {
      img: images.fina1,
      nombre: "Papa Fina",
      carousel: [images.fina2, images.fina3, images.fina4],
      descripcion:
        " Ideal para freír, esta variedad es la preferida por los amantes de las papas fritas crujientes y doradas.",
    },
    {
      img: images.agata1,
      nombre: "Papa Agata",
      carousel: [images.agata2, images.agata3, images.agata4],
      descripcion:
        " Agatha: piel fina, carne amarilla, apreciada por su sabor y textura en diferentes platillos.",
    },
    {
      img: images.ota1,
      nombre: "Papa Orquesta",
      carousel: [images.ota2, images.ota3, images.ota4],
      descripcion:
        "  Con una textura suave y un sabor delicado, es perfecta para purés y platos horneados.",
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
          {items.map((item, index) => (
            <Tabs.Item key={index} title={item.nombre}>
              <CardInside items={item} />
              <p className="w-10/12 mx-auto px-2 font-medium mt-4">
                {item.descripcion}
              </p>
            </Tabs.Item>
          ))}
        </Tabs>
      </div>
    </div>
  );
}

export default CardPotatosSmall;
