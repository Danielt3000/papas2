"use client";

import Card from "../Card/Card";
import Carrousel from "../Carrousel/Carrousel";

const Layout90 = (props) => {
  const { heading, description } = {
    ...Layout90Defaults,
    ...props,
  };

  return (
    <section className="px-[5%] py-5  pt-16">
      <div className="container mb-12 grid grid-cols-1 items-start justify-between gap-x-12 gap-y-8 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
        <h3 className="text-4xl font-bold leading-[1.2] md:text-5xl lg:text-6xl">
          "El Clásico Regio" su principal proveedor de papas de alta calidad en
          la zona norte de México.
        </h3>
        <p className="  text-xl  md:text-2xl md:mt-4 lg:mt-0">
          Nos especializamos en el lavado y distribución de papas seleccionadas
          rigurosamente de las regiones más fértiles del país, garantizando un
          producto superior que satisface los paladares más exigentes
        </p>
      </div>
      <div>
        <Carrousel />
      </div>
    </section>
  );
};

const Layout90Defaults = {
  heading: "Long heading is what you see here in this feature section",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
  image: {
    src: "https://relume-assets.s3.amazonaws.com/placeholder-image-landscape.svg",
    alt: "Placeholder image",
  },
};

export { Layout90 };
