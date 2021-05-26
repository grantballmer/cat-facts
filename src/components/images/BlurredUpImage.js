import React from "react";
import useProgressiveImg from "../../customHooks/useProgressiveImage";

const BlurredUpImage = ({ small, large, altText }) => {
  const [src, { blur }] = useProgressiveImg(small, large);

  return (
    <img
      src={src}
      alt={altText}
      style={{
        filter: blur ? "blur(5px)" : "none",
        transition: blur ? "none" : "filter 0.3s ease-out",
      }}
    />
  );
};

export default BlurredUpImage;
