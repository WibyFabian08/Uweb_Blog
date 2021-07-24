import React from "react";
import { Link } from "react-router-dom";
import user from "../assets/images/user.png";

const CardPost = ({ data }) => {
  return (
    <div className="mt-10 flex flex-wrap">
      {data ?
        data?.data?.map((data, index) => {
          const formatedDate = new Date(data?.createdAt).toDateString();
          return (
            <div
              // style={{ width: 340 }}
              className="mb-16 flex flex-col justify-between w-full md:w-1/3 px-4"
              key={index}
            >
              <img
                src={`https://uweb-blog.herokuapp.com/${data?.image}`}
                className="w-full object-cover rounded-3xl"
                alt=""
              />
              <div className="flex flex-col">
                <p className="text-gray-400 text-xs mt-5 capitalize truncate ...">{`${data?.tag} - ${formatedDate}`}</p>
                <Link
                  to={`/detail/${data._id}`}
                  className="text-white text-2xl mt-3"
                >
                  {data?.title}
                </Link>
                <p className="text-gray-400 text-sm mt-3 truncate ...">
                  {data?.body}
                </p>
                <div className="flex items-center mt-3">
                  <img
                    src={user}
                    className="rounded-full object-cover"
                    width={50}
                    alt=""
                  />
                  <div className="flex flex-col ml-3">
                    <p className="text-white text-sm">{data?.author?.name}</p>
                    <p className="text-gray-400 truncate ... text-xs">
                      {data?.author?.profession}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        }) : (<div>Post not found</div>)}
    </div>
  );
};

export default CardPost;
