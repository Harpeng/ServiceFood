import React from "react";
import { Menu } from "../menu/component";
import { Reviews } from "../reviews/component";

export const Restaurant = ({data}) => {

  return (
    <div>
        <h2>{data.name}</h2>
        <Menu menu={data.menu}/>
        <Reviews reviews={data.reviews} />
    </div>
  );
};