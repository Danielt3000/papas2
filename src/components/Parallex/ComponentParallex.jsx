import React, { useEffect, useState } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import VideoBack from "./VideoBack";
import Navbar from "../Navbar/Navbar";
import Card from "../Card/Card";
import Carrousel from "../Carrousel/Carrousel";
import CardPotatos from "../Card/CardPotatos";
import CardPotatosSmall from "../Card/cardPotatosSmall";
import LocalBig from "../Local/LocalBig";
import Local from "../Local/Local";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
function ComponentParallex() {
  const [width, useWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => useWidth(window.innerWidth));
  }, []);
  return (
    <div>
      <div className="background">
        <div className="">
          <Navbar />
        </div>
        <VideoBack />
      </div>
      <div className=" sha-inn z-40 lg:mt-[px] pt-10">
        <div>
          <div className="md:px-20">
            <section>
              <h1 className="text-center text-4xl font-bold px-2 mx-auto mb-14 md:w-[700px] ">
                Bienvenidos a : <br />
                "El Clásico Regio" su principal proveedor de papas de alta
                calidad en la zona norte de México.
              </h1>
            </section>
            <section id="nostros" className=" mx-auto ">
              <div className="w-full">
                <div className=" lg:w-[100%] h-full  px-4    md:pb-10 xl:w-[1000px] bg-[#1a1a61f4] shadow-lg  shadow-[#060606]  inner-border-4 border-[#c8a23ae4] md:mx-auto md:flex rounded-xl  xs:px-10 gap-10 justify-between mx-4">
                  <h1 className="text-center   pt-10  text-xl  xl:text-2xl   md:w-[400px]    text-white  ">
                    Nos especializamos en el lavado y distribución de papas
                    seleccionadas rigurosamente de las regiones más fértiles del
                    país, garantizando un producto superior que satisface los
                    paladares más exigentes.
                  </h1>
                  <div className=" rounded-xl md:w-[500px] h-[300px] md:mt-5 ml:mt-0 md:pb-5    md:h-[200px]">
                    <Carrousel />
                  </div>
                </div>
                {/* // sm:px-14 max-xs:px-3 lg:flex max-xs:text-center lg:mt-8
                justify-between */}
              </div>
              <div className=" max-md:px-5  flex flex-col md:flex-row md:gap-16 xl:max-w-[1000px] xl:mx-auto   md:justify-around mt-10">
                <div className="md:w-5/12">
                  <h1 className="py-2 px-3 w-fit mb-3 font-bold rounded-lg bg-[#FEA423] ">
                    Mision
                  </h1>
                  <p className="xl:text-xl  ">
                    Ser los líderes en distribución de papas en el norte del
                    país, comprometidos con la excelencia y la confianza de
                    nuestros clientes, asegurando que cada papa que entregamos
                    es de la más alta calidad.
                  </p>
                </div>
                <div className="max-md:mt-10 md:w-6/12">
                  <h1 className="py-2 px-3 w-fit mb-3 rounded-lg bg-[#FEA423]  font-bold">
                    Vision
                  </h1>

                  <p className="xl:text-xl">
                    Aspiramos a ser un pilar esencial en la cadena de suministro
                    alimentaria de México, comprometidos a entregar productos de
                    calidad con responsabilidad y eficiencia. Nos esforzamos por
                    ser parte integral de la alimentación diaria de cada
                    mexicano.
                  </p>
                </div>
              </div>
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
