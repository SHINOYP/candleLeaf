import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Layout from "../components/Layout/Layout";
const ProductDetails = () => {
  const params = useParams();
  const [product, setProduct] = useState({});
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (params?.slug) {
      getProducts();
    }
  }, [params?.slug]);

  const getProducts = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:8000/api/v1/product/get-product/${params.slug}`
      );
      setProduct(data?.product);
      getSimilarProduct(data?.product.slug, data?.product.category._id);
    } catch (error) {
      console.log(error);
    }
  };

  //get related pr
  const getSimilarProduct = async (slug, cid) => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `http://localhost:8000/api/v1/product/related-product/${slug}/${cid}`
      );
      setRelated(data?.products);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  if (loading) {
    return <Layout>loading</Layout>;
  } else {
    return (
      <Layout>
        <div className="flex bg-white w-[1300px] pt-10">
          <img
            src={`http://localhost:8000/api/v1/product/product-photo/${product._id}`}
            className="w-[600px] border-white  bg-white"
            alt={product.name}
          />

          <div className="p-6 ">
            <h1 className="text-4xl mx-auto font-bold">{product.name}</h1>
          </div>
        </div>
      </Layout>
    );
  }
};

export default ProductDetails;
