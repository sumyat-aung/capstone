import React, { useContext } from "react";
import { Link, Routes, Route } from "react-router-dom";
import { context } from "../context/Context";
import Cart from "./Cart";
import Main from "./Main";

export default function Header() {
  let { cartItems } = useContext(context);

  return (
    <>
      <nav>
        <Link to="/">
          <i className="fa-sharp fa-solid fa-images home-icon"></i>
        </Link>
        <Link to="/cart">
          <div className="cart-div">
            <i className="fa-solid fa-cart-shopping cart-icon"></i>
            {cartItems.length > 0 && (
              <p className="badge">{cartItems.length}</p>
            )}
          </div>
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}
