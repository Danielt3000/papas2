import React, { useEffect, useState } from "react";

import VideoBack from "./VideoBack";

import CardPotatos from "../Card/CardPotatos";
import CardPotatosSmall from "../Card/cardPotatosSmall";
import LocalBig from "../Local/LocalBig";
import Local from "../Local/Local";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import { Navbar1 } from "../Navbar2/Navbar1";
import { Layout90 } from "../Layout/Layout90";
import Compañias from "../Compañias/Compañias";
function ComponentParallex() {
  const [width, useWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => useWidth(window.innerWidth));
  }, []);
  return (
    <div>
      <div className="background">
        <div className="">
          <Navbar1 />
        </div>
        <VideoBack />
      </div>
      <div className=" sha-inn z-40 lg:mt-[px]">
        <div>
          <div className="md:px-20">
            <section>
              <Layout90 />
            </section>
            <div className=" max-md:px-5  flex flex-col md:flex-row md:gap-16 xl:max-w-[1000px] xl:mx-auto   md:justify-around mt-10">
              <div className="md:w-5/12">
                <h1 className="py-2 px-3 w-fit mb-3 font-bold rounded-lg bg-[#b8954a]">
                  Mision
                </h1>
                <p className="xl:text-xl  ">
                  Ser los líderes en distribución de papas en el norte del país,
                  comprometidos con la excelencia y la confianza de nuestros
                  clientes, asegurando que cada papa que entregamos es de la más
                  alta calidad.
                </p>
              </div>
              <div className="max-md:mt-10 md:w-6/12">
                <h1 className="py-2 px-3 w-fit mb-3 rounded-lg bg-[#b8954a]  font-bold">
                  Vision
                </h1>

                <p className="xl:text-xl">
                  Aspiramos a ser un pilar esencial en la cadena de suministro
                  alimentaria de México, comprometidos a entregar productos de
                  calidad con responsabilidad y eficiencia. Nos esforzamos por
                  ser parte integral de la alimentación diaria de cada mexicano.
                </p>
              </div>
            </div>
            <section className="max-md:px-5">
              <Compañias />
            </section>
            <section>
              {width > 900 ? <CardPotatos /> : <CardPotatosSmall />}
            </section>
            <section className=" mt-10  md:mt-[50px] ml:mt-[250px]">
              <div>{width > 768 ? <LocalBig /> : <Local />}</div>
            </section>
          </div>
          <section>
            <Contact />
          </section>
          <footer>
            <Footer />
          </footer>
        </div>
      </div>
    </div>
  );
}

export default ComponentParallex;
