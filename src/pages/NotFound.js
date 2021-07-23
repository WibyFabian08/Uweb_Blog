import React from "react";
import Header from "../parts/Header";
import Footer from "../parts/Footer";

const NotFound = () => {
  return (
    <div className="container mx-auto px-10 md:px-20">
      <Header></Header>
      <div className="flex flex-col items-center mt-10 mb-20">
        <h2 className="text-white text-2xl">Search: Cari Sepatu Hilang!!!</h2>
        <h2 className="text-white text-center text-6xl mt-20">No result 😥</h2>
        <p className="text-white text-sm text-center mt-6">
          We couldn’t find any posts with the keyword `Cari Sepatu Hilang!!!`.
          Please try <br /> another keyword.
        </p>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default NotFound;
