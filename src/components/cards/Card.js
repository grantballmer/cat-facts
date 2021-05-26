import React from "react";
import "./card.scss";
import Lazyload from "react-lazyload";

import BlurredUpImage from "../images/BlurredUpImage";
import CardContent from "./CardContent";

const Card = ({ data }) => {
  const { details, index } = data;
  const catImages = [
    {
      version: "v1622026660",
      fileName: "sleeping_cat",
      altText: "Sleeping cat",
    },
    {
      version: "v1622031187",
      fileName: "cat_looking_angry",
      altText: "Cat looking angry",
    },
    {
      version: "v1622030705",
      fileName: "cat_in_basket",
      altText: "Cat looking up from inside basket",
    },
    {
      version: "v1622031186",
      fileName: "kitten_on_floor",
      altText: "Kitten standing on back two legs",
    },
    {
      version: "v1622031187",
      fileName: "cat_being_held",
      altText: "Woman holding cat in arms",
    },
  ];

  const small = `https://res.cloudinary.com/dgomlckzh/image/upload/w_50/${catImages[index].version}/cat_facts/${catImages[index].fileName}.jpg`;
  const large = `https://res.cloudinary.com/dgomlckzh/image/upload/w_800/${catImages[index].version}/cat_facts/${catImages[index].fileName}.jpg`;

  const altText = catImages[index].altText;

  return (
    <article className="card">
      <div className="card__number">{index + 1}</div>
      <Lazyload className="card__image">
        <BlurredUpImage small={small} large={large} altText={altText} />
      </Lazyload>
      <CardContent details={details} index={index} />
    </article>
  );
};

export default Card;
