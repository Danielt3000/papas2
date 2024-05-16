import { Carousel } from "flowbite-react";
import papas1 from "../Carrousel/assets/papasEncarga.jpg";
import papas2 from "../Carrousel/assets/papasLimpiandoze.jpg";
import papas3 from "./assets/papasRecogiendo.jpg";

function Carrousel() {
  return (
    <div className=" rounded-2xl md:justify-center md:flex">
      <Carousel
        slide={false}
        className="rounded-2xl w-full h-[300px] md:h-[400px] md:w-[600px] xl:w-[900px]"
        indicators={false}
      >
        <img className="rounded-2xl w-full h-full  " src={papas1} alt="..." />
        <img className="rounded-2xl  w-full h-full" src={papas2} alt="..." />
        <img className="rounded-2xl  w-full h-full" src={papas3} alt="..." />
      </Carousel>
    </div>
  );
}

export default Carrousel;
