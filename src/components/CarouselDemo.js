import React, {useState, useEffect} from "react";
import { Carousel, Image } from "react-bootstrap";

const CarouselDemo = () => {
  const [imageFeed] = useState([])

  useEffect(() => {
    fetch('/data/'+imageFeed+'.json',{mode: 'no-cors'})
    .then(res=>res.json())
    .then(data=> console.log(data))
    .then(err=> console.error(err))
  }, [imageFeed])

  console.log(imageFeed)

  return (
    <Carousel className='bg-dark'>
    {imageFeed.map((image) => (
      <Carousel.Item key={image._id}>
        <Image src={image.imgSrc} alt={image.imgName} fluid />
      </Carousel.Item>
    ))}
  </Carousel>
  );
};

export default CarouselDemo;