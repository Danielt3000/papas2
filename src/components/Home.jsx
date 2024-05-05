import React, { useState, useEffect } from "react";

import Navbar from "./Navbar/Navbar";

import Card from "./Card/Card";
import Carrousel from "./Carrousel/Carrousel";
import CardPotatos from "./Card/CardPotatos";
import CardPotatosSmall from "./Card/cardPotatosSmall";
import Local from "./Local/Local";
import LocalBig from "./Local/LocalBig";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

function Home() {
  const [width, useWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => useWidth(window.innerWidth));
  }, []);

  return (
    <div>
      <Navbar />

      <div className="md:px-20">
        <section>
          <h1 className="text-center text-4xl font-bold">
            Cual es Nuestro Proposito ?
          </h1>
          <Card />
        </section>
        <section id="nostros">
          <div className="container m-auto  lg:flex justify-around md:gap-10 md:w-9/12 md:mx-auto ">
            <h1 className="w-full md:text-3xl xl:text-4xl xl:mx-auto font-bold max-md:text-center md:leading-9 md:mt-10">
              Lavando papas para llevarlo a su lugar mas cercano y como
              amdinistrarlo
            </h1>
            <p className="lg:w-9/12 xl:w-9/12 max-lg:mt-10 leading-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
              dolorum facilis maiores dolorem atque, amet earum! Dolore dolor
              blanditiis inventore dolorum nostrum veritatis, numquam,
              praesentium, esse velit animi officiis quos! Lorem ipsum dolor sit
              amet consectetur
            </p>
          </div>
          <div>
            <Carrousel />
          </div>
        </section>
        <section>
          {width > 768 ? <CardPotatos /> : <CardPotatosSmall />}
        </section>
        <section>
          <div className="mt-10">{width > 800 ? <LocalBig /> : <Local />}</div>
        </section>
      </div>
      <section>
        <Contact />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Home;
