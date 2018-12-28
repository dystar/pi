import React, {Component} from "react";
import VideosBlock from "./VideosBlock";

function StoryBlock(props) {
    var story = props.story;
    var author_img = props.author_img;
    return(
        <p className="story">
            <img className="author_img" src={author_img}/>
            {story}
        </p>
    )
}

function About(props) {
    const about_text = props.about ? props.about.text : "";
    const story = props.story ? props.story.text : "";
    var articles = [
        {
            id: 1,
            title: "The Village"
        },
        {
            id: 2,
            title: "Милосердие"
        }
    ];
    const articles_list = articles.map((article) => {
        <div className="col-12 col-md-4 article">{article.title}</div>
    })
    return(
        <div className="about">
        <div className="container map_block">
            <div className="row">
                <div className="col-12 col-md-8">
                    <img src="/src/img/russian_map.jpg" className="russian_map"/>
                </div>
                <div className="col-12 col-md-4">
                    <div className="about_text">{about_text}</div>
                </div>
            </div>
        </div>
        <div className="container">
        <h3 className="header">О проекте</h3>
            <div className="row">
                <div className="col-12 col-md-6">
                    <StoryBlock story={story} author_img="https://cdn.pixabay.com/photo/2015/04/24/20/59/girl-738306__340.jpg"/>
                </div>
                <div className="col-12 col-md-6">
                    <VideosBlock video_url="https://www.youtube.com/embed/3_Mc_icIrAs"/>
                </div>
            </div>
            <div className="row">
                {articles_list}
            </div>
        </div>
        </div>
    )
}

export default About;