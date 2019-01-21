import React, { Component } from "react";
import Header from "./Header";
import Gallery from "./Gallery";
import MissionBlock from "./MissionBlock";
import VideosBlock from "./VideosBlock";
import Articles from "./Articles";

class Home extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div>
                <Gallery/>
                <div className="bla">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <MissionBlock/>
                            </div>
                            <div className="col-12 col-md-6">
                                <VideosBlock video_url="https://youtube.com/embed/G3kCnvd6nY4" header="Видео ролики"/>
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