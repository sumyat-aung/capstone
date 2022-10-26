import React, { useContext, useState } from "react";
import { context } from "../context/Context";

export default function Cart() {
  let { cartItems, removeCart, setCartItems } = useContext(context);
  let [order, setOrder] = useState("Purchase");

  let placingOrder = () => {
    setOrder("Placing Order ... ");
    setTimeout(() => {
      setCartItems([]);
      setOrder("Purchase");
    }, 3000);
  };

  let cartsElement = cartItems.map((item) => {
    return (
      <div className="cart-item">
        <img src={`${item.url}`} alt="Love" />
        <h2>
          3.9 ${" "}
          <i
            className="fa-solid fa-trash"
            onClick={() => removeCart(item.id)}
          ></i>
        </h2>
      </div>
    );
  });

  return (
    <>
      <div className="cart-wrapper">
        <h1 className="cart-title">Check Out</h1>
        {cartsElement}
        <div className="total">
          <h2>Total : </h2>
          <h2> {cartItems.length * 3.9} $ </h2>
        </div>
        {cartItems.length > 0 && (
          <button className="purchase" onClick={placingOrder}>
            {order}
          </button>
        )}
      </div>
    </>
  );
}
