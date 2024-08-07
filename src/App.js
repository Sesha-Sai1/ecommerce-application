import "./App.css";
import ProductList from "./components";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import SignIn from "./components/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Reset from "./components/ForgetPassword";
import WishList from "./components/wishList";
import "./Css/index.css";
import SignUp from "./components/SignUp";
function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/forgetPass" element={<Reset />} />
        <Route path="/wishList" element={<WishList />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
