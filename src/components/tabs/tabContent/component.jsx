import React from "react";
import ReactDOM from "react-dom/client";
import { restaurants } from "../../../constants/constants";
import { Menu } from "../menu/component";
import { Reviews } from "../../reviews/component";

export const TabContent = ({data}) => {
  return (
    <div>
        <h2>{data.name}</h2>
        <Menu menu={data.menu}></Menu>
        <Reviews reviews={data.reviews}></Reviews>
    </div>
  );
};
