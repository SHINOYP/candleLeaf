import React from "react";
import { useSelector, useDispatch } from "react-redux";
import RemoveIcon from "@mui/icons-material/Remove";
import { removeItem } from "../features/cart/cartSlice";
import Layout from "../components/Layout/Layout";
const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart);

  console.log(items);

  if (items?.value?.length !== 0) {
    return (
      <Layout>
        <div className="flex flex-col bg-gray-100 min-h-screen w-screen p-4">
          <h1 className="mx-auto text-2xl font-bold my-4">
            Hello you have{" "}
            <span className="text-green-600 ">{items?.value?.length}</span> item
            in you cart
          </h1>
          <div className="flex">
            <div className="flex flex-col ">
              {items &&
                items?.value?.map((item, index) => (
                  <div
                    className="w-[700px] flex bg-white rounded-md h-[250px] m-3"
                    key={index} // Assigning key prop to the outermost div
                  >
                    <img
                      src={`http://localhost:8000/api/v1/product/product-photo/${item?._id}`}
                      className="object-fil h-[100%] w-1/3 rounded-l-md"
                      alt={item?.name}
                    />
                    <div className="flex flex-col p-4">
                      <h1 className="mb-4 text-xl font-bold">{item?.name}</h1>
                      <p className="text-sm">{item?.description}</p>
                      <div className="mt-auto flex">
                        <label className="text-xl mr-3">Price:</label>
                        <span className="font-bold text-2xl text-green-600">
                          {item?.price}
                        </span>
                        <button
                          className="bg-red-500 w-1/4 rounded ml-auto"
                          onClick={() => {
                            setTimeout(1000);
                            dispatch(removeItem(item?._id));
                          }}
                        >
                          <RemoveIcon />
                          <span className="font-black">Remove</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            <div className="mt-10 flex flex-col mx-auto">
              <h1 className="mx-auto text-3xl font-bold">Cart Summary</h1>
              <div className="flex gap-2 mt-4">
                <span>Total</span>
                <span>|</span> <span>Checkout</span> <span>|</span>
                <span>Payment</span>
              </div>
              <hr className="my-2 font-bold  h-4 border-black border-10" />
              <div className="flex text-4xl ">
                <span className="p-2"> Total : </span>
                <h1 className="text-green-800 font-black ml-2 bg-white h-fit rounded-lg p-2">
                  {" "}
                  ${items.amount}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  } else {
    return (
      <Layout>
        <div className="flex flex-col bg-gray-100 h-screen w-screen items-center p-4 ">
          <h4 className="text-2xl font-bold mt-6 ">
            No items in your cart cart
          </h4>
        </div>
      </Layout>
    );
  }
};

export default Cart;
