import React, { useEffect, useState } from "react";

let context = React.createContext();

function ContextProvider(props) {
  let [imgData, setImgData] = useState([]);
  let [cartItems, setCartItems] = useState([]);

  let toggleFav = (id) => {
    let UpdateData = imgData.map((I) => {
      if (I.id === id) {
        return {
          ...I,
          isFavorite: !I.isFavorite,
        };
      } else {
        return I;
      }
    });

    setImgData(UpdateData);
  };

  let toggleCart = (newItem) => {
    setCartItems((prev) => {
      return [...prev, newItem];
    });
  };

  let removeCart = (removeId) => {
    let newArray = cartItems.filter((element) => element.id !== removeId);
    setCartItems(newArray);
  };

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    )
      .then((res) => res.json())
      .then((data) => setImgData(data));
  }, []);

  return (
    <context.Provider
      value={{
        imgData,
        toggleFav,
        toggleCart,
        removeCart,
        cartItems,
        setCartItems,
      }}
    >
      {props.children}
    </context.Provider>
  );
}

export { context, ContextProvider };
