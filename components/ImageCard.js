import React from "react";
import Link from 'next/link';

const ImageCard = ({ item }) => {
  const desc = item.description;
  const res =desc.substr(0, 40);

  return (
    <div className="bg-brown-color3 lg:w-60  rounded-2xl overflow-hidden m-3  hover: cursor-pointer   ">
      <img src={item.image} alt="" className="w-full  h-36 md:h-48 object-cover  mt-5 mb-1 border-y-4 border-white-color3"/>
      <div className="px-6 py-8 text-center " >
        <div className="font-bold text-white-color1 text-lg ">
          {item.name}
        </div>
        <div className="text-white-color2 ">
          <ul>
            <li>
              {res}...
            </li>
            <li className="text-md ">
              <strong>Rp. {item.price}</strong>
            </li>
            <li className="text-md flex justify-between mt-2">
              <p className="py-3">{item.category}</p>
              <Link href={`/Favorite/${item.id}`} key={item.id} className="px-4 py-3 font-semibold rounded-full dark:bg-white-color3 text-brown-color3 hover:bg-white-color1">Details</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
