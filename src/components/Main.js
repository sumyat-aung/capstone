import React, { useContext } from "react";
import { context } from "../context/Context";
import Img from "./Img";

export default function Main() {
  let { imgData } = useContext(context);

  let MapData = imgData.map((d) => (
    <Img
      key={d.id}
      src={d.url}
      id={d.id}
      isFavorite={d.isFavorite}
      wholeImg={d}
    />
  ));
  return <div className="img-wrapper"> {MapData}</div>;
}
