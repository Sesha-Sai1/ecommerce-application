import React, { Fragment, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  RemoveItem,
  decrementQuntity,
  incrementQuntity,
} from "../store/AddToCartSlice";
import Navbar2 from "./Navbar2";
import { toast } from "react-toastify";
const Cart = () => {
  const data = useSelector((state) => state.product);
  // const [cartData, setCartData] = useState(data);
  const dispatch = useDispatch();
  const RemoveCard = (prod) => {
    dispatch(RemoveItem({ id: prod.id }));
    toast.error("Item is successfully removed form Cart😢");
  };
  return (
    <>
      <Navbar2 />

      <div style={{ marginTop: "100px" }}>
        {data.length === 0 ? (
          <h1 style={{ marginTop: "300px" }}>
            The cart is empty 😒 Go to Home and add Products😊
          </h1>
        ) : (
          <div className="container" style={{ marginTop: "100px" }}>
            {data.map((prod, index) => {
              return (
                <Fragment key={index}>
                  <div className="row">
                    <div
                      className="card mb-3"
                      style={{ maxwidth: "540px", maxHeight: "540px" }}
                    >
                      <div className="row">
                        <div
                          className="col-md-4 text-center align-middle"
                          style={{ height: "auto" }}
                        >
                          <img
                            src={prod.image}
                            className="img-fluid  w-50 h-50 rounded-start"
                            alt="no"
                          />
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                            <h5 className="card-title">
                              <b>{prod.title}</b>
                            </h5>
                            <p className="card-text">
                              {prod.description?.slice(0, 70)}
                            </p>
                            <p className="card-text">
                              <small className="text-body-secondary">
                                <strong>${prod.price * prod.quantity}</strong>
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
                                  RemoveCard(prod);
                                }}
                                className="btn btn-danger "
                              >
                                Remove
                              </button>
                            </p>
                            <p>
                              <div className="d-flex justify-content-center my-2">
                                <span>
                                  <button
                                    className="btn btn-danger btn-sm"
                                    disabled={prod.quantity < 2 ? true : false}
                                    onClick={() =>
                                      dispatch(
                                        decrementQuntity({ id: prod.id })
                                      )
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
                                      dispatch(
                                        incrementQuntity({ id: prod.id })
                                      )
                                    }
                                  >
                                    +
                                  </button>
                                </span>
                              </div>
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

      <div className="col">
        {data.length > 0 ? (
          <h1>
            TotalPrice =$
            {data.reduce((acc, val) => {
              return val.price * val.quantity + acc;
            }, 0)}
            ;
          </h1>
        ) : null}
      </div>
    </>
  );
};

export default Cart;
