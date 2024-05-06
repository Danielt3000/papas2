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
              <h1 className="text-center text-4xl font-bold px-2 mx-auto mb-14 ">
                Somos Una Compañia dedicada a la distruibucion de papas
              </h1>
            </section>
            <section id="nostros" className=" mx-auto ">
              <div className="w-full">
                <div className=" lg:w-[100%] h-full   min-md:h-[400px]  xl:w-[80%] bg-[#1a1a61f4] shadow-lg  shadow-[#060606]  inner-border-4 border-[#c8a23ae4] md:mx-auto md:flex rounded-xl  p-3 xs:px-10 gap-10 justify-between mx-4">
                  <h1 className="text-center  pt-10  text-2xl sm:text-4xl lg:text-5xl  xl:text-6xl  md:w-6/12 md:my-auto    text-white  ">
                    Lavando papas para llevarlo a su lugar mas cercano y como
                    amdinistrarlo
                  </h1>
                  <div className=" rounded-xl md:w-[500px] h-[300px]   md:h-[500px]">
                    <Carrousel />
                  </div>
                </div>
              </div>

              <div className=" sm:px-14  md:flex  max-xs:px-3 max-xs:text-center xl:w-9/12 lg:mt-8   mx-auto text-2xl">
                <p className="  py-5 text-xl leading-8  font-semibold md:w-11/12 md:ml-10">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                  dolorum facilis maiores dolorem atque, amet earum! Dolore
                  dolor blanditiis inventore dolorum nostrum veritatis, numquam,
                  praesentium, esse velit animi officiis quos! Lorem ipsum dolor
                  sit amet consectetur
                </p>
                <p className="  py-5 text-xl leading-8 font-semibold md:w-11/12 md:ml-10">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                  dolorum facilis maiores dolorem atque, amet earum! Dolore
                  dolor blanditiis inventore dolorum nostrum veritatis, numquam,
                  praesentium, esse velit animi officiis quos! Lorem ipsum dolor
                  sit amet consectetur
                </p>
              </div>
            </section>
            <section>
              {width > 768 ? <CardPotatos /> : <CardPotatosSmall />}
            </section>
            <section>
              <div className="mt-10 md:mt-[20%]">
                {width > 800 ? <LocalBig /> : <Local />}
              </div>
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
