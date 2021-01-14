import React from "react";
import { Carousel, Image } from "react-bootstrap";
import ImageFeed from "./imageFeed";

const CarouselDemo = () => {
    const imgFeed = ImageFeed;
  return (
    <Carousel className='bg-dark'>
    {imgFeed.map((image) => (
      <Carousel.Item key={image._id}>
        <Image src={image.imgSrc} alt={image.imgName} fluid />
      </Carousel.Item>
    ))}
  </Carousel>
  );
};

export default CarouselDemo;
