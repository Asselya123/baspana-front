import { Carousel } from "antd";
import React from "react";
import Preview from "@/assets/preview.webp";

export interface ApartmentCarouselProps {
  images: string[];
}

export const ApartmentCarousel: React.FC<ApartmentCarouselProps> = ({
  images,
}) => {
  return (
    <Carousel className="max-w-[800px]">
      {[...images, Preview].map((image, index) => (
        <div key={`${image}-${index}`}>
          <img src={image} alt="" />
        </div>
      ))}
    </Carousel>
  );
};
