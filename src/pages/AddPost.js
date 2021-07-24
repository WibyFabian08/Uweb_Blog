import axios from "axios";
import React, { useState } from "react";
import Footer from "../parts/Footer";
import Header from "../parts/Header";

import { useHistory } from "react-router-dom";

const AddPost = () => {
  let history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState("");
  const [data, setData] = useState({
    title: "",
    tag: "",
    name: "",
    profession: "",
    body: "",
    image: null,
  });

  function submit() {
    if (
      data.title === "" ||
      data.body === "" ||
      data.tag === "" ||
      data.name === "" ||
      data.profession === "" ||
      image === null
    ) {
      return alert("Isi semua field input!!!");
    }
    setIsLoading(true);
    const post = new FormData();
    post.append("title", data.title);
    post.append("body", data.body);
    post.append("image", image);
    post.append("tag", data.tag);
    post.append("name", data.name);
    post.append("profession", data.profession);

    axios
      .post(`http://localhost:4000/v1/blog/post`, post, {
        headers: {
          "Content-Type": "Multipart/Form-Data",
        },
      })
      .then((res) => {
        setIsLoading(false);
        setData({
          ...data,
          title: "",
          tag: "",
          name: "",
          profession: "",
          body: "",
          image: null,
        });
        history.push("/");
      })
      .catch((err) => {
        console.log(err?.response?.data?.message);
        setIsLoading(false);
        return alert("Isi Semua Field Input!!!");
      });
  }

  const onUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };
  return (
    <div className="container mx-auto px-10 md:px-20">
      <Header></Header>
      <h2 className="text-white text-4xl mb-5 mt-10 text-center">
        Add New Post
      </h2>
      <div className="flex justify-center">
        <div className="w-1/2 flex flex-col">
          <div className="flex flex-col mb-5">
            <label htmlFor="title" className="text-white text-1xl mb-2">
              Post Title
            </label>
            <input
              type="text"
              onChange={(e) => setData({ ...data, title: e.target.value })}
              value={data.title}
              name="title"
              placeholder="Type here..."
              className="w-full px-5 py-2 rounded-lg outline-none bg-gray-200 text-black"
            />
          </div>
          <div className="flex flex-col mb-5">
            <label htmlFor="body" className="text-white text-1xl mb-2">
              Post Body
            </label>
            <textarea
              type="text"
              rows="10"
              onChange={(e) => setData({ ...data, body: e.target.value })}
              value={data.body}
              name="title"
              placeholder="Type here..."
              className="w-full px-5 py-2 rounded-lg outline-none bg-gray-200 text-black"
            />
          </div>
          <div className="flex flex-col mb-5">
            <label htmlFor="image" className="text-white text-1xl mb-2">
              Post Image (One Image)
            </label>
            <input
              type="file"
              onChange={(e) => onUpload(e)}
              className="w-full px-5 py-2 rounded-lg outline-none bg-gray-200 text-black"
            />
          </div>

          <div className="flex flex-col mb-5">
            <label htmlFor="tag" className="text-white text-1xl mb-2">
              Post Tag
            </label>
            <select
              name="tag"
              className="w-full px-5 py-2 rounded-lg outline-none bg-gray-200 text-black"
              onChange={(e) => setData({ ...data, tag: e.target.value })}
            >
              <option
                value=""
                className="w-full px-5 py-2 rounded-lg outline-none bg-gray-200 text-black"
              >
                ---Select Tag---
              </option>
              <option
                value="frontend"
                className="w-full px-5 py-2 rounded-lg outline-none bg-gray-200 text-black"
              >
                Frontend
              </option>
              <option
                value="backend"
                className="w-full px-5 py-2 rounded-lg outline-none bg-gray-200 text-black"
              >
                Backend
              </option>
              <option
                value="fullstack"
                className="w-full px-5 py-2 rounded-lg outline-none bg-gray-200 text-black"
              >
                Fullstack
              </option>
              <option
                value="travelling"
                className="w-full px-5 py-2 rounded-lg outline-none bg-gray-200 text-black"
              >
                Travelling
              </option>
              <option
                value="technology"
                className="w-full px-5 py-2 rounded-lg outline-none bg-gray-200 text-black"
              >
                Technology
              </option>
            </select>
          </div>
          <div className="flex flex-col mb-5">
            <label htmlFor="author" className="text-white text-1xl mb-2">
              Author
            </label>
            <input
              type="text"
              onChange={(e) => setData({ ...data, name: e.target.value })}
              value={data.author}
              name="author"
              placeholder="Type here..."
              className="w-full px-5 py-2 rounded-lg outline-none bg-gray-200 text-black"
            />
          </div>
          <div className="flex flex-col mb-5">
            <label htmlFor="profession" className="text-white text-1xl mb-2">
              Profession
            </label>
            <input
              type="text"
              onChange={(e) => setData({ ...data, profession: e.target.value })}
              value={data.profession}
              name="profession"
              placeholder="Type here..."
              className="w-full px-5 py-2 rounded-lg outline-none bg-gray-200 text-black"
            />
          </div>
          <div>
            <button
              onClick={() => submit()}
              className="bg-white text-black px-6 py-2 rounded-md outline-none"
            >
              {isLoading ? "Loading..." : "Post"}
            </button>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AddPost;
