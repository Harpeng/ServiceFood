import React from "react";
import { Menu } from "../menu/menu";
import { Reviews } from "../reviews/reviews";

export const TabsContent = ({data}) => {

  return (
    <div>
        <h2>{data.name}</h2>
        <Menu menu={data.menu}/>
        <Reviews reviews={data.reviews} />
    </div>
  );
};