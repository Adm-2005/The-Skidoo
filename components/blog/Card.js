import React, { useState } from "react";
import Link from "next/link";
import { IconContext } from "react-icons";
import { CiLocationOn } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";

export default function Card({ post }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    if (post.media.length > 1) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === post.media.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const prevImage = () => {
    if (post.media.length > 1) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? post.media.length - 1 : prevIndex - 1
      );
    }
  };

  return (
        <div className="relative w-[260px] h-[500px] rounded-lg overflow-hidden bg-transparent">
          {post.media.length > 1 ? (
            <div className="relative w-full h-3/5">
              <img
                src={post.media[currentImageIndex].link}
                alt="Post"
                className="w-full h-full object-fill rounded-3xl"
              />
              <button
                onClick={prevImage}
                className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full cursor-pointer hover:bg-opacity-75 hidden group-hover:block"
              >
                &#8592;
              </button>
              <button
                onClick={nextImage}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full cursor-pointer hover:bg-opacity-75 hidden group-hover:block"
              >
                &#8594;
              </button>
            </div>
          ) : (
            <img
              src={post.media[0].link}
              alt="Post"
              className="w-full h-3/5 object-cover rounded-3xl"
            />
          )}
          <Link href={`/post/${post.slug}`}>
              <div className="p-3 text-left bg-transparent leading-none flex flex-col gap-1">
                <h3 className="text-md  font-semibold font-poppins text-gray-800">{post.title}</h3>
                <div className="flex items-center gap-2">
                    <IconContext.Provider value={{ size: '15px'}}>
                        <CiLocationOn />
                    </IconContext.Provider>
                    <p className="text-sm text-gray-600">{post.location}</p>
                </div>
                <div className="flex items-center gap-2">
                    <IconContext.Provider value={{ size: '15px'}}>
                        <FaRegUserCircle />
                    </IconContext.Provider>
                    <p className="text-sm text-gray-600">{post.author.name}</p>
                </div>
              </div>
          </Link>
          <style>
            {`
              .group:hover .group-hover\:block {
                display: block;
              }
            `}
          </style>
        </div>
  );
}
