import React, {Component} from "react";
import {Link} from "react-router-dom";
import {apiUrl} from "../apiUrl";

function cut_text(text) {
    if(text.length > 100)
        return text.slice(0, 90) + "... Читать далее";
    return text;
}

function Hero(props) {
    const hero = props.hero;
    const text = cut_text(hero.text);
    const full_hero_link = "/heroes/" + hero.year + "/" + hero.city + "/" + hero._id;
    return (
        <div className="col-12 col-md-4">
            <Link to={full_hero_link}>
                <div className="hero">
                    <img className="hero_image" src={hero.image}/>
                    <p dangerouslySetInnerHTML={{__html: text}}></p>
                </div>
            </Link>
        </div>
    )
}

function FullHero(props) {
    if(props.hero) {
        const hero = props.hero;
        return (
            <div className="hero">
                <img className="hero_image" src={hero.image}/>
                <p dangerouslySetInnerHTML={{__html: hero.text}}></p>
            </div>
        )
    }
    else {
        return (
            <div className="hero"></div>
        )
    }
}

class Heroes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            heroes: []
        }
    }
    componentDidMount() {
        fetch(apiUrl + "heroes")
        .then(res => {
            if(res.ok)
                return res;
        })
        .then(res => res.json())
        .then(data => {
            this.setState({heroes: data})
        });
    }
    render() {
            var heroes = this.state.heroes;

            if(this.props.match.params.heroId) {
                heroes = heroes.filter(hero => hero._id == this.props.match.params.heroId);
                return(
                    <div className="container">
                        <FullHero hero={heroes[0]}/>
                    </div>
                )
            }

            if(this.props.match.params.year)
                heroes = heroes.filter(hero => hero.year == this.props.match.params.year);

            if(this.props.match.params.city)
                heroes = heroes.filter(hero => hero.city == this.props.match.params.city);
            
            heroes = heroes.map((hero) => <Hero key={hero._id} hero={hero}/>);
        return(
            <div className="container">
                <div className="row">
                    {heroes}
                </div>
            </div>
        )
    }
}


export default Heroes;