import React, {Component} from 'react';
import {UncontrolledCollapse, Button} from 'reactstrap';
import { apiUrl } from '../apiUrl';

var ObjectId = require("bson-objectid");

function handleSubmit(event, handleChange) {
    event.preventDefault();
    const type = event.target.getAttribute("type");
    const data = new FormData(event.target);
    console.log(data);
    fetch(apiUrl + type, {
        method: 'POST',
        body: data,
    })
    .then(
        () => handleChange()
    );
}

function noop(input){
    return true;
}

function EditForm(props) {
    if(props.type=="pages") {
        const obj = props.obj ? props.obj : {_id: ObjectId(), id: "", name: "", title: "", text: ""}
        return( <form className="form" type="pages" onSubmit={(event) => {handleSubmit(event, props.handleChange)}} encType="multipart/form-data" key={obj._id}>
                <input type="hidden" name="_id" defaultValue={ObjectId(obj._id)} onChange={noop}/>
                <label>Алиас</label><input type="text" name="name" defaultValue={obj.name} onChange={noop} className="form-control"/>
                <label>Заголовок</label><input type="text" name="title" defaultValue={obj.title} onChange={noop} className="form-control"/>
                <label>Текст</label><textarea name="text" defaultValue={obj.text} onChange={noop} className="form-control"/>
                <button type="submit">Сохранить</button>
            </form>
        )
    }
    if(props.type=="articles") {
        const obj = props.obj ? props.obj : {_id: ObjectId(), id: "", title: "", text: ""}
        return( <form className="form" type="articles" onSubmit={(event) => {handleSubmit(event, props.handleChange)}} encType="multipart/form-data">
                <input type="hidden" name="_id" defaultValue={ObjectId(obj._id)} onChange={noop}/>
                <label>Заголовок</label><input type="text" name="title" defaultValue={obj.title} onChange={noop} className="form-control"/>
                <label>Картинка</label><input type="file" name="image" onChange={noop} className="form-control"/>
                <label>Текст</label><textarea name="text" defaultValue={obj.text} onChange={noop} className="form-control"/>
                <button type="submit">Сохранить</button>
            </form>
        )
    }
    if(props.type=="heroes") {
        const obj = props.obj ? props.obj : {_id: ObjectId(), id: "", name: "", city: "", year: "", text: ""}
        return( <form className="form" type="heroes" onSubmit={handleSubmit} encType="multipart/form-data">
                <input type="hidden" name="_id" defaultValue={ObjectId(obj._id)} onChange={noop}/>
                <label>Имя</label><input type="text" name="name" defaultValue={obj.name} onChange={noop} className="form-control"/>
                <label>Город</label><input type="text" name="city" defaultValue={obj.city} onChange={noop} className="form-control"/>
                <label>Год</label><input type="text" name="year" defaultValue={obj.year} onChange={noop} className="form-control"/>
                <label>Картинка</label><input type="file" name="image" onChange={noop} className="form-control"/>
                <label>Текст</label><textarea name="text" defaultValue={obj.text} onChange={noop} className="form-control"/>
                <button type="submit">Сохранить</button>
            </form>
        )
    }
    else return null;
}

class Admin extends Component{
    constructor(props){
        super(props);   
        this.state = {
            collection: "pages",
            id: 1,
            pages: [],
            articles: [],
            heroes: [],
            edit: {
                obj: null,
                type: null
            }
        }
        this.setEditing = this.setEditing.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.fetchData = this.fetchData.bind(this);
    }
    componentDidMount() {
        this.fetchData();
    }
    fetchData() {
        ["pages", "articles", "heroes"].map(col => {
            fetch(apiUrl + col)
            .then(res => {
                if(res.ok)
                    return res;
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.setState({[col]: data})
            }).catch(() => {
                console.log("server unavailable");
            })
        });
    }
    setEditing(obj, type) {
        this.setState({edit: {obj: obj, type: type}});
    }
    handleChange() {
        this.fetchData();
    }
    render() {
        const page_names = this.state.pages.map(page => <li key={page._id} onClick={() => this.setEditing(page, "pages")}>{page.title}</li>)
        const articles_names = this.state.articles.map(article => <li key={article._id} onClick={() => this.setEditing(article, "articles")}>{article.title}</li>)
        const heroes_names = this.state.heroes.map(hero => <li key={hero._id} onClick={() => this.setEditing(hero, "heroes")}>{hero.name}</li>)
        console.log(this.state.edit.obj)
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-3">
                        <h3>Страницы [<span onClick={() => this.setState({edit: {type: "pages"}})}>новая</span>]</h3>
                        {page_names}
                        <h3>Статьи [<span onClick={() => this.setState({edit: {type: "articles"}})}>новая</span>]</h3>
                        {articles_names}
                        <h3>Герои [<span onClick={() => this.setState({edit: {type: "heroes"}})}>новая</span>]</h3>
                        {heroes_names}
                    </div>
                    <div className="col-12 col-md-9">
                        <EditForm obj={this.state.edit.obj} type={this.state.edit.type} handleChange = {this.handleChange}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Admin;