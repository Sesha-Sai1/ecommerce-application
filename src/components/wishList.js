import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RemoveWishList } from "../store/WishListSlice";
import Navbar3 from "./Navbar3";
import { AddCart, RemoveItem } from "../store/AddToCartSlice";
import { toast } from "react-toastify";

const WishList = () => {
  const dispatch = useDispatch();
  const WishListData = useSelector((state) => state.wish);
  // const [addedToCart, setAddedToCart] = useState(false);
  const cardData = useSelector((state) => state.product);
  let cardDataId = cardData.map((prod) => {
    return prod.id;
  });
  let wishListId = WishListData.map((product, ind) => {
    console.log(product.id, "line no -15");
    return product.id;
  });
  console.log(wishListId, "line no -18 ");
  const addedToCart = cardData.some((item) => {
    console.log(item.id, "line no -20");
    return wishListId.includes(item.id);
  });
  console.log(addedToCart, "line no -23");
  const RemoveWishListData = (prod) => {
    dispatch(RemoveWishList({ id: prod.id }));
  };
  const AddToWishFromCart = (prod) => {
    if (addedToCart) {
      dispatch(RemoveItem(prod));
      // setAddedToCart(false);
      toast.error("Item removed from the cart 😢");
    } else {
      dispatch(AddCart({ ...prod, quantity: 1 }));
      // setAddedToCart(true);
      toast.success("Item added to cart 😁");
    }
  };
  return (
    <div>
      <Navbar3 />
      {WishListData.length === 0 ? (
        <h1 style={{ marginTop: "300px" }}>
          {" "}
          The WishList is empty 😒 Add Products which you Like 😊
        </h1>
      ) : (
        <div className="container" style={{ marginTop: "100px" }}>
          {WishListData.map((prod, index) => {
            return (
              <Fragment key={index}>
                <div className="row">
                  <div className="card mb-3" style={{ maxHeight: "540px" }}>
                    <div className="row">
                      <div
                        className=" text-center align-middle col-md-4 col-sm-12"
                        style={{ height: "auto" }}
                      >
                        <img
                          src={prod.image}
                          className="img-fluid rounded-start w-50 h-50 "
                          alt="no"
                        />
                      </div>
                      <div
                        className="col-md-8 col-sm-12"
                        style={{ height: "auto" }}
                      >
                        <div className="card-body">
                          <h5 className="card-title">
                            <b>{prod.title}</b>
                          </h5>
                          <p className="card-text">
                            {prod.description?.slice(0, 70)}
                          </p>
                          <p className="card-text">
                            <small className="text-body-secondary">
                              <strong>${prod.price}</strong>
                            </small>
                          </p>
                          <p>
                            <small className="text-body-secondary">
                              <strong>Rating:{prod.rating.rate}</strong>
                            </small>
                          </p>
                          <p>
                            <button
                              onClick={() => {
                                RemoveWishListData(prod);
                              }}
                              className="btn btn-danger "
                            >
                              Remove
                            </button>
                          </p>
                          <p>
                            <button
                              className={`btn ${
                                cardDataId.includes(prod.id)
                                  ? "btn-danger"
                                  : "btn-primary"
                              }`}
                              onClick={() => {
                                AddToWishFromCart(prod);
                              }}
                              // className="btn btn-primary"
                              // disabled={addedToCart ? true : false}
                            >
                              {cardDataId.includes(prod.id)
                                ? "Remove from cart"
                                : "Add to Cart"}
                              {/* Add to cart */}
                            </button>
                            {/* <div className="d-flex justify-content-center my-2">
                            <span>
                              <button
                                className="btn btn-danger btn-sm"
                                disabled={prod.quantity < 2 ? true : false}
                                onClick={() =>
                                  dispatch(decrementQuntity({ id: prod.id }))
                                }
                              >
                                -
                              </button> 
                            </span>
                            <span className="mx-2">
                              <b>{prod.quantity}</b>
                            </span>
                            <span>
                              <button
                                className="btn btn-success btn-sm"
                                onClick={() =>
                                  dispatch(incrementQuntity({ id: prod.id }))
                                }
                              >
                                +
                              </button>
                            </span>
                          </div> */}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Fragment>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default WishList;
