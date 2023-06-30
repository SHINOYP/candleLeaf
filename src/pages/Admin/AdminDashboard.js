import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import MenuList from "./Components/MenuList";
import CategoryForm from "../../components/Form/CategoryForm";
import axios from "axios";
import EditIcon from "@mui/icons-material/Edit";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CloseIcon from "@mui/icons-material/Close";

export const AdminDashboard = () => {
  const [categories, setCategorires] = useState([]);
  const [name, setName] = useState("");
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(null);
  const [updatedName, setUpdatedName] = useState("");
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    getAllCategory();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:8000/api/v1/category/create-category",
        { name }
      );
      if (data?.success) {
        // toast.success(`${name} is created`);
        getAllCategory();
        setName("");
      } else {
        // toast.error(data?.message);
      }
    } catch (error) {
      console.log(error);
      //   toast.error("something went wronh in input form");
    }
  };
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8000/api/v1/category/get-category"
      );
      if (data?.success) {
        setCategorires(data?.category);
      }
    } catch (error) {
      console.log(error);
      //   toast.error("Something went wrong");
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        `http://localhost:8000/api/v1/category/update-catergory/${selected._id}`,
        { name: updatedName }
      );
      console.log("hoora");
      if (data.success) {
        // toast.success(`${updatedName} is updated`);
        setSelected(null);
        setUpdatedName("");
        setVisible(false);
        getAllCategory();
      } else {
        // toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      //   toast.error("Something went wrong");
    }
  };

  //delete category
  const handleDelete = async (pId) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:8000/api/v1/category/delete-category/${pId}`
      );
      if (data.success) {
        // toast.success(`category is deleted`);

        getAllCategory();
      } else {
        // toast.error(data.message);
      }
    } catch (error) {
      //   toast.error("Somtihing went wrong");
    }
  };

  return (
    <Layout>
      <div className="flex bg-gray-100 min-h-screen w-screen p-4 justify-evenly ">
        <MenuList />
        <div className="flex flex-col w-[65%] mt-14">
          <h1 className="mx-auto text-2xl font-bold">Manage Category</h1>
          <div className="">
            <CategoryForm
              handleSubmit={handleSubmit}
              value={name}
              setValue={setName}
            />
          </div>
          <div className="">
            <div className="border-2 rounded">
              <div className="flex w-full justify-around ">
                <h1 className="">Name</h1>
                <h1>Actions</h1>
              </div>
              {categories.map((c) => (
                <>
                  <div className="flex items-center border-2 ">
                    <h1
                      className="w-96 items-center flex justify-center border-r-2"
                      key={c._id}
                    >
                      {c.name}
                    </h1>
                    <div className="mx-10 my-5 justify-evenly w-[50%] flex">
                      <Button
                        variant="contained"
                        startIcon={<EditIcon />}
                        className="btn btn-primary"
                        onClick={() => {
                          setOpen(true);
                          setUpdatedName(c.name);
                          setSelected(c);
                        }}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="contained"
                        color="error"
                        startIcon={<DeleteIcon />}
                        onClick={() => {
                          handleDelete(c._id);
                        }}
                        className="btn btn-danger ms-2"
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>

          {/* <Modal
            onCancel={() => setVisible(false)}
            footer={null}
            visible={visible}
          >
            <CategoryForm
              value={updatedName}
              setValue={setUpdatedName}
              handleSubmit={handleUpdate}
            />
          </Modal> */}
          <Dialog open={open} onClose={handleClose} fullWidth>
            <div className="flex justify-between">
              <DialogTitle>Edit category name</DialogTitle>
              <CloseIcon onClick={handleClose} className="m-3">
                Cancel
              </CloseIcon>
            </div>
            <div className="p-3">
              <CategoryForm
                value={updatedName}
                setValue={setUpdatedName}
                handleSubmit={handleUpdate}
              />
            </div>
          </Dialog>
        </div>
      </div>
    </Layout>
  );
};
