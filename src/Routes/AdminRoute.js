import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Redirect from "../components/Redirect";

const AdminRoute = () => {
  const [ok, setOk] = useState(false);
  const user = useSelector((state) => state.auth);
  useEffect(() => {
    const authCheck = async () => {
      const res = await axios
        .get("http://localhost:8000/api/v1/auth/admin-auth")
        .then((res) => {
          if (res.data.ok) {
            setOk(true);
          } else {
            setOk(false);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };
    if (user?.token) authCheck();
  }, [user?.token]);

  return ok ? (
    <Outlet />
  ) : (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        height: "100vh",
        justifyContent: "center",
      }}
    >
      {" "}
      <Redirect path="" />
    </div>
  );
};

export default AdminRoute;
