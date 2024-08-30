"use client";
import { useState } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import CircleIcon from '@mui/icons-material/Circle';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';

// Code referenced from https://medium.com/@dissanayakewishwajith/creating-an-image-slider-with-next-js-tailwind-css-and-typescript-4dbeeb9c0df6

interface Props {
    imageList: ImageData[];
  }

// Interface for image data
interface ImageData {
    src: StaticImageData;
}

const ImageSlides: React.FC<Props> = ({ imageList }) => {
    // State to keep track of the current image index
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    // Function to return an image indicator button for the slides
    function imageIndicator(index: number) {
        if (index == currentIndex) {
            return (
                <button onClick={() => jumpTo(index)}>
                    <CircleOutlinedIcon className="indexIndicator" 
                    sx={{ fontSize: 15 }}></CircleOutlinedIcon>
                </button>);
        } else {
            return (
                <button onClick={() => jumpTo(index)}>
                    <CircleIcon className="indexIndicator"
                    sx={{ fontSize: 10 }}></CircleIcon>
                </button>);
        }
    }

    // Function used with indicator buttons to jump to an image
    function jumpTo(index: number) {
        setCurrentIndex(index);
    }

    // Function used to show the previous slide
    const prevSlide = (): void => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + imageList.length) % imageList.length
        );

    };

    // Function used to show the next slide
    const nextSlide = (): void => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imageList.length);
    };

    return (
        <div>
            <div className="imageArea">
                <Image className="projectImage"
                    src={imageList[currentIndex].src}
                    alt={`Slider Image ${currentIndex + 1}`}
                />
                <button className="prev" onClick={prevSlide}>
                    &#10094;
                </button>
                <button className="next" onClick={nextSlide}>
                    &#10095;
                </button>
            </div>

            <div className="imageIndicator">
                {imageList.map((_, index) => (
                    <div key={index}>
                    {imageIndicator(index)}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ImageSlides;