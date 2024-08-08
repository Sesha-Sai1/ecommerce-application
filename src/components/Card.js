import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddCart, RemoveItem } from "../store/AddToCartSlice";
import { toast } from "react-toastify";
import { AddToWishList, RemoveWishList } from "../store/WishListSlice";
import { useNavigate } from "react-router-dom";
const Card = ({ product }) => {
  const { id, image, title, description, price, rating } = product;
  // const [wish, setWish] = useState(false);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.product);
  const wishListData = useSelector((state) => state.wish);
  const navigate = useNavigate();
  const addedToCart = data.some((item) => item.id === id);
  const wish = wishListData.some((item) => item.id === id);
  const AddToWish = () => {
    // dispatch(AddToWishList(product));
    // setWish(true);
    if (wish) {
      dispatch(RemoveWishList(product));
      // setWish(false);
      toast.error("Item removed from the wishList 😢");
    } else {
      dispatch(AddToWishList(product));
      // setWish(true);
      toast.success("Item added to WishList 😁");
    }
  };
  const AddToCart = () => {
    if (addedToCart) {
      dispatch(RemoveItem(product));
      toast.error("Item removed from the cart 😢");
    } else {
      dispatch(AddCart({ ...product, quantity: 1 }));
      toast.success("Item added to cart 😁");
    }
  };

  // if (data) {
  //   console.log(data);
  // }
  return (
    <>
      <div className=" col-lg-4 col-md-6 col-sm-12 col-xl-3 col-xxl-3 text-center">
        <div className="card my-2" style={{ width: "320px", height: "430px" }}>
          <div
            className="d-flex justify-content-center "
            style={{ height: "150px" }}
          >
            <img src={image} className="card-img-top img-fluid m-4 " alt="No" />
          </div>
          <div className="card-body  " style={{ height: "52px" }}>
            <div>
              <h5 className="card-title">{title}</h5>
            </div>
            <div>
              <p className="card-text">{description?.slice(0, 50)}</p>
            </div>
          </div>

          <div className="card-body" style={{ height: "10px" }}>
            <div>
              <span style={{ fontWeight: "bolder" }}>${price}</span>
            </div>
            <div>
              <span>Rating :{rating?.rate}</span>
            </div>

            <div className="my-3 d-flex justify-content-around mx-2">
              <div>
                <i
                  class={
                    wish
                      ? "fa-2xl fa-solid fa-heart mt-2"
                      : "fa-2xl fa-regular fa-heart mt-2"
                  }
                  onClick={AddToWish}
                ></i>
              </div>

              <div>
                <button
                  onClick={() => {
                    AddToCart();
                  }}
                  className={`btn ${
                    addedToCart ? "btn-danger" : "btn-primary"
                  }`}
                >
                  {addedToCart ? "Remove from cart" : "Add to Cart"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
