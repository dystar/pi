import React from "react";
function VideosBlock(props) {
    var header = props.header ? <h3 className="header">{props.header}:</h3> : null;
    return(
        <div className="videos_block">
        {header}
        <iframe className="youtube" src={props.video_url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
        </div>
    )
}


export default VideosBlock;