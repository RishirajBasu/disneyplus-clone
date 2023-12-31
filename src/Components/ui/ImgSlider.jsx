import React from "react";
import { styled } from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const ImgSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    // speed of the slider
    speed: 700,
    // Slides to show on the screen at a given time
    slidesToShow: 1,
    // the no. of slides to be scrolled at one go on clicking the sliders
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Carousel {...settings}>
      <Wrap>
        <a>
          <img src="/images/slider-badging.jpg" alt="" />
        </a>
      </Wrap>
      <Wrap>
        <a>
          <img src="/images/slider-scales.jpg" alt="" />
        </a>
      </Wrap>
      <Wrap>
        <a>
          <img src="/images/slider-scale.jpg" alt="" />
        </a>
      </Wrap>
      <Wrap>
        <a>
          <img src="/images/slider-badag.jpg" alt="" />
        </a>
      </Wrap>
    </Carousel>
  );
};

// here we are building a styled component from an existing component and not a html element
const Carousel = styled(Slider)`
  margin-top: 20px;
  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1000;
    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease-in-out 0.1s;
    }
  }
  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 150, 171);
    }
  }
  /* changing the color of the dots to pure white */
  li.slick-active button:before {
    color: white;
  }
  .slick-list {
    overflow: initial;
  }
  /* pushes the slider buttons to extreme left */
  .slick-prev {
    left: -50px;
  }
  /* pushes the slider buttons to extreme right */
  .slick-next {
    right: -50px;
  }
`;
const Wrap = styled.div`
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  a {
    border-radius: 4px;
    box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
      rgb(0 0 0 /73%) 0px 16px 10px -10px;
    cursor: pointer;
    display: block;
    position: relative;
    padding: 4px;
    img {
      width: 100%;
      height: 100%;
    }
    &:hover {
      padding: 0;
      border: 4px solid rgba(249, 249, 249, 0.8);
      transition-duration: 300ms;
    }
  }
`;
export default ImgSlider;
