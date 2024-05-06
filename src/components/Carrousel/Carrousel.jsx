import { Carousel } from "flowbite-react";
import papas1 from "../Carrousel/assets/papasEncarga.jpg";
import papas2 from "../Carrousel/assets/papasLimpiandoze.jpg";
import papas3 from "./assets/papasRecogiendo.jpg";

function Carrousel() {
  return (
    <div className="h-[100%] mx-auto xs:w-[80%]  xs:mt-11  w-[100%] rounded-2xl">
      <Carousel slide={false} className="rounded-2xl" indicators={false}>
        <img className="rounded-2xl" src={papas1} alt="..." />
        <img className="rounded-2xl" src={papas2} alt="..." />
        <img className="rounded-2xl" src={papas3} alt="..." />
      </Carousel>
    </div>
  );
}

export default Carrousel;
