import React from "react";

function cut_text(text) {
    if(text.length > 100)
        return text.slice(0, 90) + "... Читать далее";
    return text;
}

function Hero(props) {
    const hero = props.hero;
    const text = cut_text(hero.text);
    return (
        <div className="col-12 col-md-4">
            <div className="hero">
                <img className="hero_image" src={hero.image}/>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Hero;