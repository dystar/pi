import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter, BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import Header from "./js/components/Header";
import Footer from "./js/components/Footer";
import Home from "./js/components/Home";
import About from "./js/components/About";
import Heroes from "./js/components/Heroes";
import Articles from "./js/components/Articles";
import Admin from "./js/components/Admin";
import SimplePage from "./js/components/SimplePage";
import {apiUrl} from "./js/apiUrl";

import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css"
import "./css/styles.scss";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pages: [],
            about: ""
        }
    }
    componentDidMount() {
        fetch(apiUrl + "pages")
        .then(res => {
            if(res.ok)
                return res;
        })
        .then(res => res.json())
        .then(data => {
            this.setState({pages: data, about: "about_test"})
        })
        .catch(
            () => console.log("server unavailable")
        )
    }
    render() {
        const about=this.state.pages.filter(page => page.name == "about")[0];
        const story=this.state.pages.filter(page => page.name == "story")[0];
        const help=this.state.pages.filter(page => page.name == "help")[0];
        const thanks=this.state.pages.filter(page => page.name == "thanks")[0];
        return(
            <div className="outer">
                <Header/>
                <div className="main_content">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/about/" component={() => <About about={about} story={story} />} />
                        <Route path="/heroes/:year?/:city?/:heroId?" component={Heroes} />
                        <Route path="/articles/:articleId?" component={Articles} />
                        <Route path="/help" component={() => <SimplePage page={help}/>} />
                        <Route path="/thanks" component={() => <SimplePage page={thanks}/>} />
                        <Route path="/admin" component={Admin} />
                    </Switch>
                </div>
                <Footer/>
            </div>
        )
    }
}
export default withRouter(Main);

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<BrowserRouter><Main /></BrowserRouter>, wrapper) : false;