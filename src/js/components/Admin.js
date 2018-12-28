import React, {Component} from 'react';
import {UncontrolledCollapse, Button} from 'reactstrap';
import { apiUrl } from '../apiUrl';

function handleSubmit(event) {
    event.preventDefault();
    const type = event.target.getAttribute("type");
    const data = new FormData(event.target);
    console.log(data);
    fetch(apiUrl + type, {
        method: 'POST',
        body: data,
  });
}

function EditForm(props) {
    if(props.type=="pages") {
        return( <form className="form" type="pages" onSubmit={handleSubmit} encType="multipart/form-data">
                <input type="hidden" name="_id" defaultValue={props.obj._id}/>
                <label>Алиас</label><input type="text" name="name" defaultValue={props.obj.name} className="form-control"/>
                <label>Заголовок</label><input type="text" name="title" defaultValue={props.obj.title} className="form-control"/>
                <label>Текст</label><textarea name="text" defaultValue={props.obj.text} className="form-control"/>
                <button type="submit">Сохранить</button>
            </form>
        )
    }
    if(props.type=="articles") {
        return( <form className="form" type="articles" onSubmit={handleSubmit} encType="multipart/form-data">
                <input type="hidden" name="_id" defaultValue={props.obj._id}/>
                <input type="hidden" name="id" defaultValue={props.obj.id}/>
                <label>Заголовок</label><input type="text" name="title" defaultValue={props.obj.title} className="form-control"/>
                <label>Картинка</label><input type="file" name="image" className="form-control"/>
                <label>Текст</label><textarea name="text" defaultValue={props.obj.text} className="form-control"/>
                <button type="submit">Сохранить</button>
            </form>
        )
    }
    if(props.type=="heroes") {
        return( <form className="form" type="heroes" onSubmit={handleSubmit} encType="multipart/form-data">
                <input type="hidden" name="_id" defaultValue={props.obj._id}/>
                <input type="hidden" name="id" defaultValue={props.obj.id}/>
                <label>Имя</label><input type="text" name="name" defaultValue={props.obj.name} className="form-control"/>
                <label>Город</label><input type="text" name="city" defaultValue={props.obj.city} className="form-control"/>
                <label>Год</label><input type="text" name="year" defaultValue={props.obj.year} className="form-control"/>
                <label>Картинка</label><input type="file" name="image" className="form-control"/>
                <label>Текст</label><textarea name="text" defaultValue={props.obj.text} className="form-control"/>
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
    }
    componentDidMount() {
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
            });
        });
    }
    setEditing(obj, type) {
        this.setState({edit: {obj: obj, type: type}});
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
                        <h3>Страницы [<span onClick={() => this.setState({edit: {obj: {}, type: "pages"}})}>новая</span>]</h3>
                        {page_names}
                        <h3>Статьи [<span onClick={() => this.setState({edit: {obj: {}, type: "articles"}})}>новая</span>]</h3>
                        {articles_names}
                        <h3>Герои [<span onClick={() => this.setState({edit: {obj: {}, type: "heroes"}})}>новая</span>]</h3>
                        {heroes_names}
                    </div>
                    <div className="col-12 col-md-9">
                        <EditForm obj={this.state.edit.obj} type={this.state.edit.type}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Admin;