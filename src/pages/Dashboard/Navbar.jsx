import React from "react";
import "./navbar.css";
import { Button } from "@chakra-ui/react";
import { useContext } from "react";
import { AuthContext } from "../../components/Authentication/AuthProvider";
import { NavLink } from "react-router-dom";

const Header = () => {
  const { logout } = useContext(AuthContext);
  return (
    <>
<section className="bg-dark">
<div className="container">
   <nav className="navbar navbar-expand-lg text-white py-4">
        <NavLink className="navbar-brand text-white fw-bold" to="/">
          Task Management App
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fa-duotone fa-bars"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
           
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <button
             className="btn btn-info text-white fw-bold"
              onClick={() => {
                logout();
              }}
            >
              Logout
            </button>
          </form>
        </div>
      </nav>
   </div>
</section>
    </>
  );
};
export default Header;
