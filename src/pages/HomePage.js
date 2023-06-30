import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Homebg from "../assets/images/bgimage.png";
import Productcard from "../components/productCard/Productcard";
import Homebg2 from "../assets/images/image.png";
import axios from "axios";

const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const [product, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    getAllProducts();
  }, []);

  //get products
  const getAllProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `http://localhost:8000/api/v1/product/get-product`
      );
      setLoading(false);
      setProducts(data.products);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  return (
    <Layout>
      <div className="  flex-col justify-center">
        <div className=" relative ">
          <img className="mx-auto object-fill" src={Homebg} alt="err"></img>
          <div
            className="flex  flex-col absolute items-center justify-center sm:gap-10 gap-2 sm:text-[1rem] md:text-[14px] text-[7px] w-[50%] h-[50%] opacity-80 top-[50%] left-[50%] bg-white"
            style={{ transform: "translate(-50%, -50%)" }}
          >
            <h1 className="">The nature candle</h1>
            <p>
              All handmade with natutal soy wax,Candleag is a companion for all{" "}
              <br />
              your pleasure moments
            </p>
            <button className="bg-green-500 w-[50%] h-[10%]   rounded-lg">
              Discovery our collection
            </button>
          </div>
        </div>
        <div className="flex flex-col bg-white p-20 h-fit">
          <div className=" mx-auto flex  flex-col items-center justify-center">
            <h1 className="text-2xl font-bold py-4">Products</h1>
            <h3>Order it for you or for your beloved ones</h3>
          </div>
          <div className="flex p-6 w-full flex-wrap gap-6">
            {product?.map((p) => (
              <div key={p._id}>
                <Productcard content={p} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex bg-gray-100 p-20  h-fit items-center">
          <div className="flex gap-9">
            <div>
              <h1 className="text-5xl font-bold">
                Clean and
                <br /> fragrant soy wax
              </h1>
              <small className="text-green-500 flex mt-3">
                Made for your home and for your wellness
              </small>

              <ul className="flex flex-col gap-6 mt-8">
                <li>
                  <span className="font-bold">Eco-sustainable: </span>All
                  recyclable materials,0% CO2 emmissions
                </li>
                <li>
                  <span className="font-bold">Hyphoallergenic: </span>100%
                  natural,human firendly ingredients
                </li>
                <li>
                  <span className="font-bold">handmade: </span>All candles are
                  craftly made with love
                </li>
                <li>
                  <span className="font-bold">Long Burning: </span>No more
                  waste.Created for last long
                </li>
              </ul>
              <button className="bg-green-500 max-w-[40%] w-[100%] h-12 rounded-md mt-10">
                Learn more
              </button>
            </div>
            <img alt="err" className="mb-auto" src={Homebg2}></img>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
