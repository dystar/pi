import React, { Component } from "react";
import CarouselBlock from "./CarouselBlock";

function Gallery() {
    const images = [
        {
            src: "/src/img/Аня и Саша.jpg",
            caption: "Аня и Саша"
        },
        {
            src: "/src/img/Ваня.jpg",
            caption: "Ваня"
        },
        {
            src: "/src/img/Гриша.jpg",
            caption: "Гриша"
        },
        {
            src: "/src/img/Марсель.jpg",
            caption: "Марсель"
        },
        {
            src: "/src/img/Ян.jpg",
            caption: "Ян"
        }
    ];
    return (
        <CarouselBlock elements={images} type="images"/>
    )
}

export default Gallery;