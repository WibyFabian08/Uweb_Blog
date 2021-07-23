import React from "react";
import CardPost from "../parts/CardPost";
import Footer from "../parts/Footer";
import Header from "../parts/Header";
import Hero from "../parts/Hero";

const Home = () => {
  return (
    <div className="container mx-auto px-10 md:px-20">
      <Header></Header>
      <Hero></Hero>
      <CardPost></CardPost>
      <Footer></Footer>
    </div>
  );
};

export default Home;
