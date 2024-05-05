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
      <div className="">
        <Navbar />
      </div>
      <VideoBack />
      <div className=" sha-inn z-40 lg:mt-[px] pt-10">
        <div>
          <div className="md:px-20">
            <section>
              <h1 className="text-center text-4xl font-bold px-2 mx-auto mb-14 ">
                Somos Una Compañia dedicada a la distruibucion de papas
              </h1>
              <div>
                <img src="a" alt="" />
              </div>
            </section>
            <section id="nostros" className="container mx-auto xl:w-[1000px]">
              <div className="container  bg-[#1a1a61f4] rounded-xl px-5 md:flex ">
                <div className="md:border-r-4 border-white text-2xl text-center md:text-3xl     "  >
                  <div className="h-full max-lg:mt-10" >
                    <h1 className="    text-white pt-8 ">
                      Lavando papas para llevarlo a su lugar mas cercano y como
                      amdinistrarlo
                    </h1>
                  </div>
                </div>
                <p className=" text-white py-5 text-md leading-8 font-medium md:w-11/12 md:ml-10"  >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                  dolorum facilis maiores dolorem atque, amet earum! Dolore
                  dolor blanditiis inventore dolorum nostrum veritatis, numquam,
                  praesentium, esse velit animi officiis quos! Lorem ipsum dolor
                  sit amet consectetur
                </p>
              </div>
              <div className="px-5 rounded-xl">
                <Carrousel />
              </div>
            </section>
            <section>
              {width > 768 ? <CardPotatos /> : <CardPotatosSmall />}
            </section>
            <section>
              <div className="mt-10">
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
