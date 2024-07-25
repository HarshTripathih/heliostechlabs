import React from "react";
import Slider from "react-slick";
import { CardContent, Typography, Box, Button } from "@mui/material";
import { carouselItems } from "./carouselConstants"; // Import the constants
import "./carouselStyles.css"; // Import the custom CSS

// Carousel settings
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Carousel: React.FC = () => {
  return (
    <div className="mt-10 w-full">
      <Box className="w-full relative">
        <Slider {...settings}>
          {carouselItems.map((item, index) => (
            <Box key={index} className="relative">
              <img
                className="w-full h-[600px] object-cover"
                src={item.image}
                alt={`Slide ${index + 1}`}
              />
              <CardContent className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center p-4">
                <Typography
                  variant="h2"
                  component="h2"
                  className="font-bold text-white"
                >
                  {item.title}
                </Typography>
                <Typography variant="subtitle1" component="h3" className="mb-2">
                  {item.subtitle}
                </Typography>
                <Typography variant="body1">{item.content}</Typography>
                <Button
                  variant="contained"
                  className="mt-4 bg-white text-purple-700 text-lg"
                  href={item.buttonLink}
                  style={{ fontSize: "1.5rem", padding: "10px 20px" }}
                >
                  {item.button}
                </Button>
              </CardContent>
            </Box>
          ))}
        </Slider>
      </Box>
    </div>
  );
};

export default Carousel;
