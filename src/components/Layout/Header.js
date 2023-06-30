import React from "react";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import BasicMenu from "./componets/BasicMenu";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Header = () => {
  const navigate = useNavigate();
  const items = useSelector((state) => state.cart);

  return (
    <div className="bg-white w-screen flex ">
      <div className="bg-white flex justify-between mx-auto items-center w-[1300px] px-10 h-16 font-semibold ">
        <div>
          <h1 onClick={() => navigate("/")}>Pedia</h1>
        </div>
        <div className="bg-white flex gap-14">
          <li className="list-none">Categories</li>
          <li className="list-none">About</li>
          <li className="list-none">Contact Us</li>
        </div>
        <div className="flex items-center gap-4">
          {" "}
          <BasicMenu />
          <IconButton aria-label="cart" onClick={() => navigate("/cart")}>
            <StyledBadge badgeContent={items?.value?.length} color="secondary">
              <ShoppingCartIcon />
            </StyledBadge>
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Header;
