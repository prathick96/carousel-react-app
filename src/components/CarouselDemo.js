import React, {useState, useEffect} from "react";
import { Carousel, Image } from "react-bootstrap";

const CarouselDemo = () => {

  const [imgFeed, setImgFeed] = useState([])

  useEffect(() => {
    fetch('/data/imageFeed.json',{mode: 'no-cors'})
    .then(res=>res.json())
    .then(data=> setImgFeed(data))
    .then(err=> console.error(err))
  }, [])

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