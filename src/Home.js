import React, { useEffect, useContext } from "react";
import { Navbar } from "react-bootstrap";
import NavBar from "./components/NavBar/NavBar";
import { isAuthenticated } from "./api/Auth";
import { AppContext } from "./context/AppContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

export default function Home() {
  const context = useContext(AppContext);
  const [user, setUser] = context.useUser;
  const [auth, setAuth] = context.useAuth;
  useEffect(() => {
    isAuthenticated()
      .then((res) => {
        setUser(res.data);
        setAuth(res.data.isAuth);
      })
      .catch((e) => {
        setAuth(false);
        setUser({});
      });
  }, []);

  return (
    <div>
      <ToastContainer />
      <NavBar></NavBar>
    </div>
  );
}
