import React from "react";

import Header from "../parts/Header";
import Footer from "../parts/Footer";

import user from "../assets/images/author-0.png";
import hero from "../assets/images/hero.png";

const Detail = () => {
  return (
    <div className="container mx-auto px-10 md:px-20">
      <Header></Header>
      <div className="flex flex-col text-center justify-center items-center mt-16">
        <p className="text-sm text-gray-400">UI DESIGN - July 2, 2021</p>
        <h2 className="text-white text-2xl mt-3">
          Understanding color theory: the color wheel and finding <br />{" "}
          complementary colors
        </h2>
        <div className="flex items-center justify-center mt-10 mb-8">
          <img src={user} width={50} alt="" />
          <div className="ml-3 flex flex-col text-left">
            <p className="text-white text-sm">Leslie Alexander</p>
            <p className="text-gray-400 text-xs">UI Designer</p>
          </div>
        </div>
        <img
          src={hero}
          width={896}
          className="object-cover rounded-3xl"
          alt=""
        />
        <div className="mt-10 w-full">
          <p className="text-sm text-gray-400 text-justify">
            Male sixth sea it a. Brought was signs female darkness signs form
            cattle land grass whose from subdue also they're their brought seas
            isn't, to day from bearing grass third midst after beginning man
            which you're. Dry, gathering beginning given made them evening.
          </p>
          <br />
          <p className="text-sm text-gray-400 text-justify">
            Lights dry. Thing, likeness, forth shall replenish upon abundantly
            our green. Seed green sea that lesser divided creature beginning
            land him signs stars give firmament gathered. Wherein there their
            morning a he grass. Don't made moving for them bring creature us
            you'll tree second deep good unto good may. Us yielding.
            <br /> <br />
            Have. Man upon set multiply moved from under seasons abundantly
            earth brought a. They're open moved years saw isn't morning
            darkness. Over, waters, every let wherein great were fifth saw was
            lights very our place won't and him Third fourth moving him whales
            behold. Beast second stars lights great was don't green give subdue
            his. Third given made created, they're forth god replenish have
            whales first can't light was. Herb you'll them beast kind divided.
            Were beginning fly air multiply god Yielding sea don't were forth.
          </p>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Detail;
