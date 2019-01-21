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
    var pubs = [
        {
            id: 1,
            title: "«Невидимые»: История мамы-фотографа, которая снимает особенных детей",
            url: "https://www.the-village.ru/village/children/children-interview/331599-nevidimye",
            source: "The Village",
            image: "https://cdn.the-village.ru/the-village.ru/post-cover/6rT-7bzgEbEZM5hBZhvGSQ-default.jpg"
        },
        {
            id: 2,
            title: "«Невидимые»: фотографии любви",
            url: "https://www.miloserdie.ru/article/nevidimye-fotografii-lyubvi/",
            source: "Милосердие",
            image: "https://www.miloserdie.ru/wp-content/uploads/2018/07/IMG_5932-1.jpg"
        }
    ];
    const pubs_list = pubs.map((pub) => {
        const style = {
            display: 'flex'
        };
        return(
            <div key={pub.id} className="col-12 col-sm-3">
            <a href={pub.url}>
                <h4>{pub.source}</h4>
                <img src={pub.image} height="200px"/>
                <p>{pub.title}</p>
            </a>
            </div>
        )
    })
    console.log(pubs);
    return(
        <div className="about">
        <div className="container map_block">
            <div className="row">
                <div className="col-12 col-md-8">
                    <img src="/src/img/mother-russia.jpg" className="russian_map"/>
                </div>
                <div className="col-12 col-md-4">
                    <div className="about_text" dangerouslySetInnerHTML={{__html: about_text}}></div>
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
            <h3 className="header">Публикации</h3>
            <div className="row">
                {pubs_list}
            </div>
        </div>
        </div>
    )
}

export default About;