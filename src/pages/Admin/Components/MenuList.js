import React from "react";
import { NavLink } from "react-router-dom";
const MenuList = () => {
  return (
    <div>
      <>
        <div className="p-14">
          <div className="flex flex-col ">
            <h4 className="mx-auto mb-4 text-2xl font-bold">Admin Panel</h4>
            <nav className="flex flex-col " id="sidebar">
              <NavLink
                to="/dashboard/admin/create-category"
                className=" w-60 h-10 justify-center flex items-center  border  border-gray-500 rounded-t hover:bg-green-200 "
              >
                Create Category
              </NavLink>
              <NavLink
                to="/dashboard/admin/create-product"
                className=" w-60 h-10 justify-center flex items-center   border border-gray-500 hover:bg-green-200"
              >
                Create Product
              </NavLink>
              <NavLink
                to="/dashboard/admin/products"
                className=" w-60 h-10 justify-center flex items-center   border border-gray-500 hover:bg-green-200"
              >
                Products
              </NavLink>
              <NavLink
                to="/dashboard/admin/orders"
                className=" w-60 h-10 justify-center flex items-center  border border-gray-500 hover:bg-green-200"
              >
                Orders
              </NavLink>
              <NavLink
                to="/dashboard/admin/users"
                className=" w-60 h-10 justify-center flex items-center   border border-gray-500 rounded-b hover:bg-green-200"
              >
                Users
              </NavLink>
            </nav>
          </div>
        </div>
      </>
    </div>
  );
};

export default MenuList;
