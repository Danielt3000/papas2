import React from "react";
import aurrera from "./assets/aurrera.png";
import bg from "./assets/bg.jpg";
import comida from "./assets/comida.png";
import franco from "./assets/franco.png";
import kfc from "./assets/kfc.png";
import restaurant from "./assets/restaurant.png";
import restaurante from "./assets/restaurante.png";
import smoke from "./assets/smoke.png";
const Logo3Defaults = {
  heading:
    "En El Clásico Regio, atendemos a una diversidad de sectores, cada uno con necesidades únicas, proporcionando papas de calidad superior que se ajustan perfectamente a sus requisitos específicos:",
  logos: [
    {
      src: aurrera,
    },
    {
      src: bg,
    },
    {
      src: comida,
    },
    {
      src: aurrera,
    },
    {
      src: bg,
    },
    {
      src: comida,
    },
    {
      src: aurrera,
    },
    {
      src: bg,
    },
  ],
};

const industrias = [
  {
    restaurantes: "Restaurantes",
    descr:
      "Papas seleccionadas que son ideales para una variedad de platos culinarios, elevando la calidad y el sabor delmenús.",
  },
  {
    restaurantes: "Supermercados",
    descr:
      "Proveemos papas frescas y de excelente calidad, que mantienen su frescura y apariencia atractiva para sus clientes.",
  },
  {
    restaurantes: "Tiendas de Abarrotes",
    descr:
      "Apoyamos a las tiendas de abarrotes locales con para  ofrecer productos de confianza a sus comunidades.",
  },
  {
    restaurantes: "Comedores Industriales",
    descr:
      "Papas para una variedad de comidas nutritivas, contribuyendo a la satisfacción y bienestar de los trabajadores en diversos entornos industriales.",
  },
];

const Compañias = (props) => {
  const { heading, logos } = {
    ...Logo3Defaults,
    ...props,
  };
  return (
    <section
      className="overflow-hidden py-8 px-5 
    "
    >
      <div className="container mx-auto mb-8 w-full max-md:max-w-lg px-[5%] md:mb-10 lg:mb-12">
        <h1 className=" text-md font-bold  md:text-2xl">{heading}</h1>
      </div>
      <div className="flex items-center pt-[28px] md:pt-0 ">
        {Array(2)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className="flex shrink-0 animate-loop-horizontally items-center  "
            >
              {logos.map((logo, index) => (
                <img
                  key={`${logo.alt}-${index}`}
                  src={logo.src}
                  className="mx-[28px] max-h-12 shrink-0 md:mx-10 md:max-h-14"
                />
              ))}
            </div>
          ))}
      </div>
      <div className="flex mt-10  gap-10  justify-center max-xl:animate-loop-horizontally max-md:h-[225px]  ">
        {industrias.map((items) => {
          return (
            <div className="bg-[#242c6c]  rounded-xl text-white p-4">
              <h3 className=" font-bold text-2xl text-center">
                {items.restaurantes}
              </h3>
              <p className=" mt-4 text-md   text-left leading-8  max-md:w-[300px]   md:w-[300px]  ">
                {items.descr}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Compañias;
