import React, { useContext, useEffect } from "react";
import {
  ButtonBack,
  ButtonNext,
  DotGroup,
  Slide,
  Slider
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { CarouselContext } from "pure-react-carousel";
import Card from "./CardWrapper";
import useWindowSize from "../hooks/windowSize";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";

const CarouselSlider = ({ setSlideCount, setCurrentSlide }: any) => {
  const screenWidth = useWindowSize();
  //pure-react-carousel context
  const carouselContext = useContext(CarouselContext);

  useEffect(() => {
    const updateCarouselSlide = (slideToBeVisible: any) => {
      const {
        currentSlide,
        totalSlides,
        visibleSlides
      } = carouselContext.state;

      setSlideCount(slideToBeVisible);

      //this is a fix to reset currentSlide when screen resizes
      if (
        currentSlide >= totalSlides - visibleSlides ||
        currentSlide >= totalSlides - slideToBeVisible
      ) {
        setCurrentSlide(totalSlides - slideToBeVisible);
      }
    };

    if (screenWidth < 832) {
      updateCarouselSlide(1);
    } else if (screenWidth < 1088) {
      updateCarouselSlide(2);
    }
    //>= 1088
    else {
      updateCarouselSlide(3);
    }
  }, [screenWidth, setSlideCount, setCurrentSlide, carouselContext]);

  return (
    <div>
      <Slider>
        <Slide index={0} className="slide">
          <Card />
        </Slide>
        <Slide index={1}>
          <Card />
        </Slide>
        <Slide index={2}>
          <Card />
        </Slide>
        <Slide index={3}>
          <Card />
        </Slide>
        <Slide index={4}>
          <Card />
        </Slide>
        <Slide index={5}>
          <Card />
        </Slide>
      </Slider>
      <div className="controls">
        <ButtonBack className="btn-arrow reverse-arrow">            
          <BsFillArrowLeftCircleFill />
        </ButtonBack>
        <DotGroup className="dot-group" />
        <ButtonNext className="btn-arrow">
          <BsFillArrowRightCircleFill />
        </ButtonNext>
      </div>
    </div>
  );
};

export default CarouselSlider;
