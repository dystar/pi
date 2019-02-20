import React from "react";
import CarouselBlock from "./CarouselBlock";

function VideosBlock(props) {
    const header = props.header ? <h3 className="header">{props.header}:</h3> : null;
    //<iframe className="youtube" src={props.video_url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
    return(
        <div className="videos_block">
            {header}
            <CarouselBlock elements={props.videos} type="youtube"/>
        </div>
    )
}

export default VideosBlock;