import React from "react";
import { Button } from "@mui/material";
const CategoryForm = ({ handleSubmit, value, setValue }) => {
  return (
    <>
      <form onSubmit={handleSubmit} className="p-2 mb-10">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Category name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="category"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>

        <Button type="submit" variant="contained">
          Submit
        </Button>
      </form>
    </>
  );
};

export default CategoryForm;
