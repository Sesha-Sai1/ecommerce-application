import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar3 = (props) => {
  //   const { data, setCartData } = props;
  const navigate = useNavigate();
  const cartData = useSelector((state) => state.product);
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
          <a className="navbar-brand">WishList</a>
          <form className="d-flex" role="search">
            {/* <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            /> */}
            <button
              className="btn btn-outline-success mx-3"
              onClick={() => {
                navigate("/products");
              }}
            >
              Home
            </button>
            <button
              className="btn btn-outline-success"
              onClick={() => {
                navigate("/cart");
              }}
            >
              <i className="fa-xl fa-solid fa-cart-shopping"></i>
              <b>{cartData.length > 0 ? cartData.length : null}</b>
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar3;
