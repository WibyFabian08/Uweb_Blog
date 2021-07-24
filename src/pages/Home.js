import axios from "axios";
import React, { useEffect, useState } from "react";
import CardPost from "../parts/CardPost";
import Footer from "../parts/Footer";
import Header from "../parts/Header";
import Hero from "../parts/Hero";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://uweb-blog/v1/blog/posts.herokuapp.com")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err?.response?.data?.message);
      });
  }, []);

  if (data.length === 0) {
    return (
      <div style={{ height: "100vh" }}>
        <div className="text-white p-5 text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-10 md:px-20">
      <Header></Header>
      <Hero></Hero>
      <CardPost data={data}></CardPost>
      <Footer></Footer>
    </div>
  );
};

export default Home;
