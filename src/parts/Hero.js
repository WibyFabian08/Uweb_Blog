import React from "react";
import gambar from "../assets/images/hero.png";
import user from "../assets/images/me.png";

const Hero = () => {
  return (
    <div className="block md:flex items-center mt-10 border-b-2 md:border-b-0 border-gray-500 ">
      <div className="w-full md:w-3/5 mb-5 md:mb-0">
        <img src={gambar} className="w-full object-cover rounded-xl" alt="" />
      </div>
      <div className="w-full md:w-2/5 flex flex-col pl-10">
        <p className="text-gray-400 text-xs">UI DESIGN - July 2, 2021</p>
        <h2 className="text-white text-2xl mt-5">
          Understanding color theory: the color <br /> wheel and finding
          complementary <br /> colors
        </h2>
        <p className="text-gray-400 text-sm mt-5">
          Nulla Lorem mollit cupidatat irure. Laborum <br /> magna nulla duis
          ullamco cillum dolor. Voluptate <br /> exercitation incididunt aliquip
          deserunt <br /> reprehenderit elit laborum.{" "}
        </p>
        <div className="flex items-center mt-5 mb-5">
            <img src={user} width={50} className="rounded-full object-cover" alt="" />
            <div className="flex flex-col ml-3">
                <p className="text-white text-sm">Wiby Fabian Rianto</p>
                <p className="text-gray-400 text-xs">FrontEnd Developer</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
