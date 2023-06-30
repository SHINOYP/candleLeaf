import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      {user.isAuthenticated ? (
        <>
          <PersonOutlineIcon
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          />
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <MenuItem
              onClick={() => {
                handleClose();
                navigate("/dashboard/admin/create-product");
              }}
            >
              Dashboard
            </MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </>
      ) : (
        <div className="flex gap-2">
          <button
            onClick={() => navigate("/login")}
            className="font-bold text-black  p-2 hover:bg-green-100 rounded "
          >
            Login
          </button>
          <button
            onClick={() => navigate("/signup")}
            className="font-bold text-black  p-2 hover:bg-green-100 rounded "
          >
            Register
          </button>
        </div>
      )}
    </div>
  );
}
