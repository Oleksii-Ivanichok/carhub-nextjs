"use client"
import {useEffect, useState} from "react";
import Image from 'next/image'

const images = [
    '/hero.png',
    '/2car.webp',
    '/3car.webp',
];
const PhotoSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="object-contain">
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`absolute w-full h-full transform ${
                        index === currentIndex ? 'opacity-100' : 'opacity-0'
                    } transition-opacity duration-500`}
                >
                    <Image
                        src={image}
                        fill
                        alt={`Slide ${index + 1}`}
                        className="w-full h-full object-contain"
                    />
                </div>
            ))}
        </div>
    );
};

export default PhotoSlider;