"use client"

import { userReviewData } from '@/data/data';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Review_Card from './Review_Card';

const ReviewSlider = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1
    },
  };

  return (
    <Carousel
      arrows={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      infinite={true}
      responsive={responsive}
    >
      {
        userReviewData.map((review)=> {
            return <div key={review.id}>
                {/* Review Card */}
                <Review_Card review={review}/>
            </div>
        })
      }
    </Carousel>
  );
};

export default ReviewSlider;
