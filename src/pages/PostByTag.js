import axios from "axios";
import React, { useEffect, useState } from "react";
import CardPost from "../parts/CardPost";
import Footer from "../parts/Footer";
import Header from "../parts/Header";

const PostByTag = ({ match }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://uweb-blog.herokuapp.com/v1/blog/posts/${match.params.tag}`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [match.params.tag]);

  if (!data) {
    return (
      <div style={{ height: "100vh" }}>
        <div className="text-white p-5 text-xl">Loading...</div>
      </div>
    );
  }

  if (data.data) {
    if (data.data.length === 0) {
      return (
        <div
          style={{ height: "100vh" }}
          className="container mx-auto px-10 md:px-20 flex flex-col justify-between"
        >
          <Header></Header>
          <div className="text-white p-5 text-center text-3xl capitalize mt-30">
            {match.params.tag} Post not found
          </div>
          <Footer></Footer>
        </div>
      );
    }
  }

  return (
    <div className="container mx-auto px-10 md:px-20">
      <Header></Header>
      <h2 className="text-white text-3xl text-center capitalize mt-10">
        {match.params.tag} Post
      </h2>
      <CardPost data={data}></CardPost>
      <Footer></Footer>
    </div>
  );
};

export default PostByTag;
