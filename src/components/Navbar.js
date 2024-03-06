import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = (props) => {
  // const { productList, setFilteredList } = props;
  const navigate = useNavigate();
  const data = useSelector((state) => state.product);
  const wishData = useSelector((state) => state.wish);

  const handelPrice = () => {
    // let newArr = productList.map((val) => {
    //   return val.price;
    // });
    // let newOne = newArr.sort();
    // setFilteredList(newOne);
  };
  return (
    <div>
      <nav className="navbar bg-body-tertiary fixed-top">
        <div className="container">
          <a className="navbar-brand">PRODUCTS</a>
          <form className="d-flex" role="search">
            <button
              className="btn btn-outline-success "
              onClick={() => {
                navigate("/cart");
              }}
            >
              <i className="fa-xl fa-solid fa-cart-shopping mx-1"></i>
              {data.length > 0 && (
                <span
                  style={{
                    width: "30px",
                    height: "30px",
                    backgroundColor: "red",
                    borderRadius: "50%",
                    padding: "4px",
                    color: "white",
                  }}
                >
                  {data.length > 0 ? data.length : null}
                </span>
              )}
              <b></b>
            </button>
            <button
              className="btn btn-outline-success mx-2"
              onClick={() => {
                navigate("/wishList");
              }}
            >
              <i class="fa-xl fa-regular fa-heart mx-1"></i>
              {wishData.length > 0 && (
                <span
                  style={{
                    width: "30px",
                    height: "30px",
                    backgroundColor: "red",
                    borderRadius: "50%",
                    padding: "4px",
                    color: "white",
                  }}
                >
                  {wishData.length > 0 ? wishData.length : null}
                </span>
              )}
              <b></b>
            </button>
            <button
              className="btn btn-outline-success"
              onClick={() => {
                navigate("/");
              }}
            >
              <b>Log out</b>
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

{
  /* <div className="col">
<span>
  <i className="fa-xl fa-solid fa-cart-shopping"></i>
</span>
</div> */
}
