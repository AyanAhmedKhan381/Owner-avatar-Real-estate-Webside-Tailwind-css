"use client";
import { cities } from "@/data/data";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CityCard from "./CityCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 4,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};


const TypedCarousel: any = Carousel;

const CitySlider = () => {
  return (
    <TypedCarousel
      arrows={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      infinite
      responsive={responsive}
    >
      {cities.map((city) => (
        <CityCard key={city.id} city={city} />
      ))}
    </TypedCarousel>
  );
};

export default CitySlider;
