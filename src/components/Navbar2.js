import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar2 = (props) => {
  //   const { data, setCartData } = props;
  const navigate = useNavigate();
  //   const [search, setSearch] = useState();

  //   const onSearch = (e) => {
  //     setSearch(e.target.value);
  //     let newArr = data.filter((ele) => {
  //       return ele.title.toLowerCase().includes(e.target.value.toLowerCase());
  //     });
  //     setCartData(newArr);
  //   };
  return (
    <div>
      <nav className="navbar bg-body-tertiary fixed-top">
        <div className="container">
          <a className="navbar-brand">Cart</a>
          <form className="d-flex" role="search">
            {/* <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            /> */}
            <button
              className="btn btn-outline-success mx-2"
              onClick={() => {
                navigate("/wishList");
              }}
            >
              <i class="fa-xl fa-regular fa-heart "></i>
            </button>
            <button
              className="btn btn-outline-success"
              onClick={() => {
                navigate("/products");
              }}
            >
              Home
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar2;
