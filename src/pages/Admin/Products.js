import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import AdminMenu from "./Components/MenuList";
import axios from "axios";
// import toast from "react-hot-toast";
import { Link } from "react-router-dom";
const Products = () => {
  const [products, setProducts] = useState([]);

  //getall products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8000/api/v1/product/get-product"
      );
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      //   toast.error("Someething Went Wrong");
    }
  };

  //lifecycle method
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <Layout>
      <div className="flex bg-gray-100 min-h-screen w-screen p-4 justify-evenly">
        <AdminMenu />

        <div className="flex flex-col w-[65%] mt-14">
          <h1 className="text-center text-3xl font-bold">All Products List</h1>
          <div className="">
            {products?.map((p) => (
              <Link
                key={p._id}
                to={`/dashboard/admin/product/${p.slug}`}
                className=" "
              >
                <div className="flex bg-white m-10 drop-shadow-lg ">
                  <img
                    src={`http://localhost:8000/api/v1/product/product-photo/${p._id}`}
                    className="w-50"
                    alt={p.name}
                  />
                  <div className="flex flex-col w-full p-4">
                    <h5 className="font-bold text-xl">{p.name}</h5>
                    <p className=" text-sm">{p.description}</p>
                    <button className="mt-auto bg-green-400 max-w-60 w-[100%] rounded hover:bg-green-700">
                      Edit
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
