import React, { Component } from "react";
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
  } from 'reactstrap';

class Gallery extends Component {
    constructor() {
        super();
        this.state = {
            current_image: 0
        }
        this.images = [
            {
                src: "/src/img/Аня и Саша.jpg",
                altText: "Аня и Саша",
                caption: "Аня и Саша"
            },
            {
                src: "/src/img/Ваня.jpg",
                altText: "Ваня",
                caption: "Ваня"
            },
            {
                src: "/src/img/Гриша.jpg",
                altText: "Гриша",
                caption: "Гриша"
            },
            {
                src: "/src/img/Марсель.jpg",
                altText: "Марсель",
                caption: "Марсель"
            },
            {
                src: "/src/img/Ян.jpg",
                altText: "Ян",
                caption: "Ян"
            }
        ];
        this.next_image = this.next_image.bind(this);
        this.previous_image = this.previous_image.bind(this);
        this.select_image = this.select_image.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }
    next_image() {
        var next_image = this.state.current_image + 1;
        if(next_image == this.images.length)
            next_image = 0;

        this.setState({current_image: next_image});
    }
    previous_image() {
        var previous_image = this.state.current_image - 1;
        if(previous_image == -1)
            previous_image = this.images.length-1;

        this.setState({current_image: previous_image});
    }
    select_image(index) {
        this.setState({current_image: index});
    }
    /*componentDidMount() {
        this.timer = setInterval(this.next_image, 3000);
    }
    componentWillUnmount() {
        clearInterval(this.timer);
    }*/
    onExiting() {
        this.animating = true;
    }
    
    onExited() {
       this.animating = false;
    }

    render(){
        const slides = this.images.map((item) => {
            return (
              <CarouselItem onExiting={this.onExiting} onExited={this.onExited} key={item.src}>
                <img src={item.src} alt={item.altText} />
                <CarouselCaption captionHeader={item.caption} captionText={" "} />
              </CarouselItem>
            );
        });
        return(
            //<img className="gallery_item" onClick={() => this.next_image()} src={this.images[this.state.current_image]}/>
            <Carousel activeIndex={this.state.current_image} next={this.next_image} previous={this.previous_image}>
            <CarouselIndicators items={this.images} activeIndex={this.state.current_image} onClickHandler={this.select_image} />
            {slides}
            <CarouselControl direction="prev" directionText="Назад" onClickHandler={this.previous_image} />
            <CarouselControl direction="next" directionText="Вперед" onClickHandler={this.next_image} />
          </Carousel>
        );
    }
}

export default Gallery;