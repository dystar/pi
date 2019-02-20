import React, { Component } from "react";
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
  } from "reactstrap";

class CarouselBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0
        }
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.select = this.select.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }
    next() {
        var next = this.state.current + 1;
        if(next == this.props.elements.length)
            next = 0;

        this.setState({current: next});
    }
    previous() {
        var previous = this.state.current - 1;
        if(previous == -1)
            previous = this.props.elements.length-1;

        this.setState({current: previous});
    }
    select(index) {
        this.setState({current: index});
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
        const slides = this.props.elements.map((item) => {
            if(this.props.type == "images")
                return (
                <CarouselItem onExiting={this.onExiting} onExited={this.onExited} key={item.src}>
                    <img src={item.src} alt={item.altText} />
                    <CarouselCaption captionHeader={item.caption} captionText={""} />
                </CarouselItem>
                );
            else if(this.props.type == "youtube") 
                return (
                    <CarouselItem onExiting={this.onExiting} onExited={this.onExited} key={item.src}>
                        <iframe className="youtube" src={item.src} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                    </CarouselItem>
                );
        });
        return(
            <Carousel activeIndex={this.state.current} next={this.next} previous={this.previous}>
            <CarouselIndicators items={this.props.elements} activeIndex={this.state.current} onClickHandler={this.select} />
            {slides}
            <CarouselControl direction="prev" directionText="Назад" onClickHandler={this.previous} />
            <CarouselControl direction="next" directionText="Вперед" onClickHandler={this.next} />
          </Carousel>
        );
    }
}

export default CarouselBlock;