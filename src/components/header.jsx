import React, { useContext } from "react";
import logo from "../assets/img/logo.svg";
import { FormControl, Input, InputAdornment, InputLabel } from "@mui/material";
import useContextProvider from "../hooks/useContextProvider.jsx";
const Header = () => {
  const { products } = useContextProvider();
  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-baseline my-5">
        <div>
          <img src={logo} />
        </div>
        <div className="d-flex w-50 justify-content-center align-items-center text-body">
          <FormControl
            className="w-100"
            sx={{ m: 1, width: "25ch" }}
            variant="standard"
          >
            <InputLabel>¿Que estás buscando ?</InputLabel>

            <Input
              id="standard-adornment-password"
              type={"text"}
              endAdornment={
                <InputAdornment position="end">
                  <i
                    className="bi bi-search"
                    style={{ fontSize: "1rem", color: "black" }}
                  />
                </InputAdornment>
              }
            />
          </FormControl>
        </div>
        <div className="d-flex">
          <i
            className="bi bi-person  mx-1"
            style={{ fontSize: "1rem", color: "black" }}
          />
          Mi cuenta
        </div>
        <div className="d-flex">
          <i
            className="bi bi-cart4  mx-1"
            style={{ fontSize: "1.5rem", color: "black" }}
          />
          {products > 0 ? (
            <div
              className="text-bg-danger p-2 d-flex rounded-circle justify-content-center align-items-center "
              style={{ width: "25px", height: "25px" }}
            >
              {products}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};
export default Header;
