import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import Header from "../parts/Header";
import Footer from "../parts/Footer";

import user from "../assets/images/me.png";
import axios from "axios";

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

const Detail = ({ match }) => {
  let history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get(`https://uweb-blog.herokuapp.com/v1/blog/post/${match.params.id}`)
      .then((res) => {
        console.log(res.data.data);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [match.params.id]);

  const formatedDate = new Date(data?.createdAt).toDateString();

  const submit = () => {
    confirmAlert({
      title: 'Confirm to submit',
      message: 'Are you sure to delete this post?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => deletePost()
        },
        {
          label: 'No',
          onClick: () => console.log('delete canceled')
        }
      ]
    });
  }

  const deletePost = () => {
    setIsLoading(true);
    axios
      .delete(`https://uweb-blog.herokuapp.com/v1/blog/post/${match.params.id}`)
      .then((res) => {
        console.log(res.data);
        setIsLoading(false);
        history.push("/");
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  };

  if (!data) {
    return (
      <div style={{ height: "100vh" }}>
        <div className="text-white p-5 text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-10 md:px-20">
      <Header></Header>
      <div className="flex flex-col text-center justify-center items-center mt-16">
        <p className="text-sm text-gray-400 capitalize">{`${data?.tag} - ${formatedDate}`}</p>
        <h2 className="text-white text-2xl mt-3">{data?.title}</h2>
        <div className="flex items-center justify-center mt-10 mb-8">
          <img src={user} width={50} alt="" />
          <div className="ml-3 flex flex-col text-left">
            <p className="text-white text-sm">{data?.author?.name}</p>
            <p className="text-gray-400 text-xs">{data?.author?.profession}</p>
          </div>
        </div>
        <img
          src={`https://uweb-blog.herokuapp.com/${data?.image}`}
          width={896}
          className="object-cover rounded-3xl"
          alt=""
        />
        <div className="mt-10 w-full">
          <p className="text-lg text-gray-400 text-justify">{data?.body}</p>
        </div>
        <div>
          <button
            onClick={() => submit()}
            className="bg-red-500 text-white px-6 py-1 rounded-md mt-10 ml-3"
          >
            {isLoading ? "Deleting..." : "Delete Post"}
          </button>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Detail;
