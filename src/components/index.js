import React, { useEffect, useState } from "react";
import Card from "./Card";
import Navbar from "./Navbar";

const ProductList = () => {
  const [productList, setProductList] = useState([]);
  const [filterdList, setFilteredList] = useState([]);
  const [priceSort, setPriceSort] = useState([]);
  const [category, setCategory] = useState("All Products");
  const [price, setPrice] = useState("Default");
  const [search, setSearch] = useState("");
  const getProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setProductList(data);
        setFilteredList(data);
      });
  };
  useEffect(() => {
    getProducts();
  }, []);
  const handleCategory = (electron) => {
    console.log(electron, "hello");
    if (electron === "All Products") {
      setFilteredList(productList);
    } else {
      let electronicsData = productList.filter((val) => {
        console.log(val.category, "line no 27");
        return val.category === electron;
      });
      console.log(electronicsData, "line no 29");
      setFilteredList(electronicsData);
      setPriceSort(electronicsData);
    }
    setCategory(electron);
    setPrice("Default");
    // let newElectronics = electronicsData.filter((val) => {
    //   return val.title.toLowerCase().includes(electron.toLowerCase());
    // });
    // setFilteredList(newElectronics);
  };
  const handlePrice = (ele) => {
    console.log("hiii");
    let newProductList = [...productList];
    // let newElectronics = [...electronicsData];
    if (ele === "Low to High") {
      let price = newProductList.sort((a, b) => a.price - b.price);
      setFilteredList(price);
    }
    if (ele === "High to Low") {
      let price2 = newProductList.sort((a, b) => b.price - a.price);
      setFilteredList(price2);
    }
    if (ele === "Default") {
      setFilteredList(newProductList);
    }
    if (
      category == "electronics" ||
      category == "jewelery" ||
      category == "men's clothing" ||
      category == "women's clothing"
    ) {
      if (ele === "Low to High") {
        let price3 = priceSort.sort((a, b) => a.price - b.price);
        setFilteredList(price3);
      }
      if (ele === "High to Low") {
        let price4 = priceSort.sort((a, b) => b.price - a.price);
        setFilteredList(price4);
      }
      if (ele === "Default") {
        setFilteredList(priceSort);
      }
    }
    // if (ele === "Default") {
    //   setFilteredList(priceSort);
    // }
    setPrice(ele);
  };
  const handleInput = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
    const newList = productList.filter((ele, ind) => {
      return ele.title.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setFilteredList(newList);
  };
  return (
    <>
      <Navbar />
      <div className="container" style={{ marginTop: "90px" }}>
        <div className="row my-3">
          <div className="col d-flex">
            <h2>Price:</h2>
            <span>
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {price}
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={() => {
                        handlePrice("Default");
                      }}
                    >
                      Default
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={() => {
                        handlePrice("Low to High");
                      }}
                    >
                      Low to High
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={() => {
                        handlePrice("High to Low");
                      }}
                    >
                      High to Low
                    </a>
                  </li>
                </ul>
              </div>
            </span>
          </div>
          <div className="col d-flex">
            <h2>Category:</h2>
            <span>
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {category}
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={() => {
                        handleCategory("All Products");
                      }}
                    >
                      All Products
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={() => {
                        handleCategory("men's clothing");
                      }}
                    >
                      Men's Clothing
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={() => {
                        handleCategory("women's clothing");
                      }}
                    >
                      Women's Clothing
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={() => {
                        handleCategory("electronics");
                      }}
                    >
                      Electronics
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={() => {
                        handleCategory("jewelery");
                      }}
                    >
                      Jewellery
                    </a>
                  </li>
                </ul>
              </div>
            </span>
          </div>
          <div className="col">
            <input
              type="text"
              placeholder="Search by product title"
              size={50}
              value={search}
              onChange={(e) => handleInput(e)}
            />
          </div>
        </div>
        <div className="row text-center">
          {filterdList.map((product, index) => {
            return <Card product={product} key={index} />;
          })}
        </div>
      </div>
    </>
  );
};

export default ProductList;
