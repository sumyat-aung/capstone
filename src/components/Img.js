import React, { useContext, useState } from "react";
import { context } from "../context/Context";
import PropTypes from "prop-types";

export default function Img(props) {
  let [hovered, setHovered] = useState(false);
  let { toggleFav, toggleCart, removeCart, cartItems } = useContext(context);

  let Enter = () => {
    setHovered(true);
  };

  let Leave = () => {
    setHovered(false);
  };

  let FavoriteDis = () => {
    if (props.isFavorite) {
      return (
        <i
          className="fa-sharp fa-solid fa-heart hearted"
          style={{ color: "#f66068" }}
          onClick={() => toggleFav(props.id)}
        ></i>
      );
    } else if (hovered) {
      return (
        <i
          className="fa-sharp fa-solid fa-heart hearted"
          onClick={() => toggleFav(props.id)}
        ></i>
      );
    }
  };

  let CartDIs = () => {
    const alreadyInCart = cartItems.find(
      (item) => item.id === props.wholeImg.id
    );
    if (alreadyInCart) {
      return (
        <i
          className="fa-solid fa-cart-shopping carted"
          style={{ color: "#05AA1B" }}
          onClick={() => removeCart(props.wholeImg.id)}
        ></i>
      );
    } else if (hovered) {
      return (
        <i
          className="fa-solid fa-cart-shopping carted"
          onClick={() => toggleCart(props.wholeImg)}
        ></i>
      );
    }
  };

  return (
    <div className="imgDiv" onMouseEnter={Enter} onMouseLeave={Leave}>
      <img key={props.key} className="img" src={`${props.src}`} alt="Love" />
      {FavoriteDis()}
      {CartDIs()}
    </div>
  );
}

Img.propTypes = {
  src: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool.isRequired,
};
