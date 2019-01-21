import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { apiUrl } from '../apiUrl';

function Article(props) {
    const article = props.article;
    const article_style = {
        backgroundImage: 'url(/' + article.image + ')'
    };
    const article_full_link = '/articles/' + article.id;
    return (
        <div className='col-12 col-md-4'>
            <Link to={article_full_link}>
                <div className='article' style={article_style}>
                    <h4 className='article_title'>{article.title}</h4>
                </div>
            </Link>
        </div>
    )
}

function FullArticle(props) {
    const article = props.article;
    const article_style = {
        backgroundImage: 'url(/' + article.image + ')'
    };
    return (
        <div className='col-12 col-md-4'>
            <div className='article' style={article_style}>
                <h4 className='article_title'>{article.title}</h4>
                <p className='article_text'>{article.text}</p>
            </div>
        </div>
    )
}

class Articles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: []
        }
    };
    componentDidMount() {
        fetch(apiUrl + "articles")
        .then(res => {
            if(res.ok)
                return res;
        })
        .then(res => res.json())
        .then(data => {
            this.setState({articles: data})
        });
    }
    render() {
        if(this.state.articles.length>0 && this.props.match && this.props.match.params.articleId) {
            var article = this.state.articles.filter(article => article.id == this.props.match.params.articleId)[0];
            return(
                <div className="container">
                    <FullArticle article={article}/>
                </div>
            )
        }

        var articles = this.state.articles.map((article) => <Article key={article.id} article={article}/>);
        return(
            <div className="container">
                <h3 className='header'>Полезная информация</h3>
                <div className='row'>
                    {articles}
                </div>
            </div>
        )
    }
}


export default Articles;