import React, {Component} from "react";

class InputFileImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false
        }
        this.edit = this.edit.bind(this);
    }
    edit() {
        this.setState({editing: true});
    }
    render(){
        function noop(input){
            return true;
        }
        if(this.state.editing)
            return(
                <input type="file" name="image" onChange={noop} className="form-control"/>
            )
        else 
            return(
                <div>
                    <img src={this.props.filename} className="preview_image"/>
                    <input type="hidden" name="image" defaultValue={this.props.filename} className="form-control"/>
                    <span className="pointer" onClick={this.edit}>изменить картинку</span>
                </div>
            )
    }
}

export default InputFileImage;