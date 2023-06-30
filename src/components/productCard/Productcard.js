import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { addItem, removeitem } from "../../features/cart/cartSlice";
import { useDispatch } from "react-redux";

const Productcard = ({ content }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col  w-[255px] h-[250px] drop-shadow-xl ">
      <div className="flex h-[74%] w-full relative  bg-gray-100">
        {" "}
        <img
          src={`http://localhost:8000/api/v1/product/product-photo/${content._id}`}
          className="object-fil h-[100%] w-full"
          alt={content.name}
        />
        <button onClick={() => dispatch(addItem(content))}>
          <ShoppingCartIcon className="absolute right-2 top-2 " />
        </button>
      </div>
      <div className=" flex justify-between h-[35%] w-full bg-white p-3">
        <h1 className="font-bold">{content.name}</h1>
        <h1 className="mt-auto text-green-700 font-bold">{content.price}</h1>
      </div>
    </div>
  );
};

export default Productcard;
