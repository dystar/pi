import React, { Component } from "react";

class Gallery extends Component {
    constructor() {
        super();
        this.state = {
            current_image: 0
        }
        this.images = [
            "https://cdn.pixabay.com/photo/2015/06/22/08/40/child-817373__340.jpg",
            "https://cdn.pixabay.com/photo/2017/07/22/20/40/kid-2529907__340.jpg",
            "https://cdn.pixabay.com/photo/2015/06/22/08/37/children-817365__340.jpg",
            "https://cdn.pixabay.com/photo/2016/11/29/20/22/child-1871104__340.jpg"
        ];
        this.next_image = this.next_image.bind(this);
    }
    next_image() {
        var next_image = this.state.current_image + 1;
        if(next_image == this.images.length)
            next_image = 0;

        this.setState({current_image: next_image});
    }
    componentDidMount() {
        this.timer = setInterval(this.next_image, 3000);
    }
    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render(){
        return(
            <img className="gallery_item" onClick={() => this.next_image()} src={this.images[this.state.current_image]}/>
        )
    }
}

export default Gallery;