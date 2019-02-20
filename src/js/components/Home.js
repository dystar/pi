import React, { Component } from "react";
import Gallery from "./Gallery";
import MissionBlock from "./MissionBlock";
import VideosBlock from "./VideosBlock";
import Articles from "./Articles";
import CarouselBlock from "./CarouselBlock";

class Home extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        const images = [
            {
                src: "/img/Аня и Саша.jpg",
                caption: "Аня и Саша"
            },
            {
                src: "/img/Ваня.jpg",
                caption: "Ваня"
            },
            {
                src: "/img/Гриша.jpg",
                caption: "Гриша"
            },
            {
                src: "/img/Марсель.jpg",
                caption: "Марсель"
            },
            {
                src: "/img/Ян.jpg",
                caption: "Ян"
            }
        ];
        const videos = [
            {
                src: "https://youtube.com/embed/G3kCnvd6nY4",
            },
            {
                src: "https://youtube.com/embed/G3kCnvd6nY4",
            },
        ];
        return(
            <div>
                <CarouselBlock elements={images} type="images"/>
                <div className="bla">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <MissionBlock/>
                            </div>
                            <div className="col-12 col-md-6">
                                <VideosBlock videos={videos} header="Видео ролики"/>
                            </div>
                        </div>
                    </div>
                </div>
                <Articles/>
            </div>
        )
    }
}

export default Home;