import React from "react";
import papas1 from "../assets/papasmanos.jpg";
import papas2 from "../assets/papas2.jpg";
import papas3 from "../assets/papacostal.mp4";

function Card() {
  return (
    <>
      <div className="py-16 ">
        <div className="container m-auto px-6 text-black md:px-12 xl:px-0 ">
          <div className="mx-auto grid md:w-3/4 lg:w-full lg:grid-cols-3 max-lg:gap-6  ">
            <div className=" bg-[#e9e9e9] max-lg:rounded-xl  lg:rounded-l-3xl    px-8 py-12 sm:px-12 lg:px-8 shadow-lg ">
              <div className="">
                <img
                  src={papas1}
                  className=" w-[300px] h-[200px] mx-auto rounded-md s "
                  alt="illustration"
                  width="900"
                  height="600"
                />
              </div>
              <div className="mt-20">
                <h3 className="text-2xl font-semibold  text-black">
                  Something
                </h3>
                <p className="mb-6 text-xl">
                  Obcaecati, quam? Eligendi, nulla numquam natus laborum porro
                  at cum, consectetur ullam tempora ipsa iste officia sed
                  officiis! Incidunt ea animi officiis.
                </p>
              </div>
            </div>
            <div className=" bg-[#ffffff] px-8  max-lg:rounded-xl py-12 sm:px-12 lg:px-8 shadow-lg ">
              <div className="mb-12 space-y-4">
                <h3 className="text-2xl font-semibold text-black">
                  Something 2
                </h3>
                <p className="mb-6 text-xl text-black">
                  Obcaecati, quam? Eligendi, nulla numquam natus laborum porro
                  at cum, consectetur ullam tempora ipsa iste officia sed
                  officiis! Incidunt ea animi officiis.
                </p>
              </div>
              <div>
                <video src={papas3} autoPlay muted loop />
              </div>
            </div>
            <div className=" bg-[#e9e9e99b] max-lg:rounded-xl lg:rounded-r-3xl px-8 py-12 sm:px-12 lg:px-8 shadow-lg ">
              <div className="mb-12 space-y-4">
                <img
                  src={papas2}
                  className=" w-[300px]  h-[200px] mx-auto rounded-md  "
                  alt="illustration"
                  width="900"
                  height="600"
                />
                <div className="mt-32">
                  <h3 className="text-2xl font-semibold text-black">
                    Something 3
                  </h3>
                  <p className="mb-6 text-xl">
                    Obcaecati, quam? Eligendi, nulla numquam natus laborum porro
                    at cum, consectetur ullam tempora ipsa iste officia sed
                    officiis! Incidunt ea animi officiis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;

const somethin = {};
