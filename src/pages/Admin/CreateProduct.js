import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import AdminMenu from "./Components/MenuList";
import axios from "axios";
// import { Select } from "antd";
// import toast from "react-hot-toast";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
// const { Option } = Select;

const CreateProduct = () => {
  const [categories, setCategorires] = useState([]);
  const [photo, setPhoto] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [shipping, setShipping] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getAllCategory();
  }, []);

  //get all catergoreis
  const getAllCategory = async (e) => {
    try {
      const { data } = await axios.get(
        "http://localhost:8000/api/v1/category/get-category"
      );
      if (data?.success) {
        setCategorires(data?.category);
      } else {
        // toast.error(data?.message);
      }
    } catch (error) {
      console.log(error);
      //   toast.error("Something went wrong");
    }
  };

  //create product
  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const productData = new FormData();
      productData.append("name", name);
      productData.append("description", description);
      productData.append("price", price);
      productData.append("category", category.target.value);
      productData.append("quantity", quantity);
      productData.append("photo", photo);
      const { data } = await axios.post(
        "http://localhost:8000/api/v1/product/create-product",
        productData
      );
      if (data?.success) {
        // toast.success("product created Successfully");
        navigate("/dashboard/admin/products");
      }
    } catch (error) {
      console.log(error);
      //   toast.error("Something went wrong");
    }
  };
  return (
    <Layout title={"Dashboard - Create Product"}>
      <div className="flex bg-gray-100 min-h-screen w-screen p-4 justify-evenly">
        <div className=" ">
          <AdminMenu />
        </div>
        <div className="flex flex-col w-[65%] mt-14 ">
          <h1 className="mx-auto text-2xl font-bold">Create Product</h1>
          <div className="m-1 w-75">
            <FormControl fullWidth>
              <label id="demo-simple-select-label">Category</label>
              <select
                // labelId="demo-simple-select-label"
                // id="demo-simple-select"
                className="block w-full rounded-md border-0 py-1.5 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(value) => {
                  setCategory(value);
                }}
              >
                {categories?.map((c) => (
                  <option key={c._id} value={c._id}>
                    {" "}
                    {c.name}
                  </option>
                ))}
              </select>
            </FormControl>
            <div class="mt-4 flex text-sm leading-6 text-gray-600">
              <label
                for="file-upload"
                class="relative cursor-pointer rounded-md bg-white font-semibold  focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 p-3"
              >
                <span></span>
                {photo ? photo.name : "Upload Photo"}
                <input
                  id="file-upload"
                  name="file-upload"
                  accept="image/*"
                  type="file"
                  onChange={(e) => {
                    setPhoto(e.target.files[0]);
                  }}
                  hidden
                />
              </label>
            </div>

            <div className="mb-3">
              {photo && (
                <div className="text-center">
                  <img
                    src={URL.createObjectURL(photo)}
                    alt=""
                    height={"200px"}
                    width={"100px"}
                    className="mx-auto"
                  />
                </div>
              )}
            </div>
            <div className="col-span-full">
              <label
                htmlFor="street-address"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="street-address"
                  id="street-address"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoComplete="street-address"
                  className="block w-full px-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="about"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Description
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  value={description}
                  className="block w-full px-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={""}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </div>
            <div className="col-span-full">
              <label
                htmlFor="street-address"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Price
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="street-address"
                  id="street-address"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  autoComplete="street-address"
                  className="block w-full px-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="street-address"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                quantity
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="street-address"
                  id="street-address"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  autoComplete="street-address"
                  className="block w-full rounded-md px-1 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="my-6">
              <FormControl fullWidth>
                <label id="demo-simple-select-label">Select Shipping</label>
                <select
                  className="block w-full rounded-md border-0 py-2 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(value) => {
                    setShipping(value);
                  }}
                >
                  <option value="0">No</option>
                  <option value="1">Yes</option>
                </select>
              </FormControl>
            </div>
            <div className="mb-3">
              <Button
                variant="contained"
                className="btn btn-primary"
                onClick={(e) => handleCreate(e)}
              >
                CREATE PRODUCT
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateProduct;
