import React from "react";
import gambar from "../assets/images/hero.png";
import user from "../assets/images/me.png";

const Hero = () => {
  return (
    <div className="block md:flex items-center mt-10 border-b-2 md:border-b-0 border-gray-500">
      <div className="w-full md:w-3/5 mb-5 md:mb-0">
        <img src={gambar} className="w-full object-cover rounded-xl" alt="" />
      </div>
      <div className="w-full md:w-2/5 flex flex-col pl-10">
        <p className="text-gray-400 text-xs">FrontEnd Developer - July 23, 2021</p>
        <p className="text-white text-2xl mt-5">
          Understanding color theory: the color <br /> wheel and finding
          complementary <br /> colors
        </p>
        <p className="text-gray-400 text-sm mt-5 truncate ...">
          Semua rasa kembali beharap rangan tanganku <br /> tuk tidak bersembunyi
          disini. Kuulangi <br /> Gelap telah kembali dan menawarkan
          terang <br /> yang mengulurkan tangan.{" "}
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
