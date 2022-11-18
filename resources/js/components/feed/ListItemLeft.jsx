import axios from 'axios';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class ListItemLeft extends Component{
    constructor(props){
        super(props);
    }

    displayTime(){
        //console.log(this.props.data.image);
        let d = new Date(this.props.data.created_at);
        return `${d.getFullYear()}. ${d.getMonth()}. ${d.getDay()}. | ${d.getHours()}:${d.getMinutes()}`;
    }

    render(){
        return (
            <div className="row align-items-center">
                <div className="col-12 col-md-6">
                    <div className="big-post-thumbnail mb-50">
                        <img src={"/images/"+this.props.data.original_filename} alt=""></img>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div className="big-post-content text-center mb-50">
                        <a href="#" className="post-tag">#Tags #Tags #Tags</a>
                        <a 
                            href="#"
                            className="post-title"
                            onClick={() => {this.props.actionHandler(`post/${this.props.data.id}`)}}
                            >{ this.props.data.caption }</a>
                        <div className="post-meta">
                            <a href="#" className="post-date">{ this.displayTime() }</a>
                            <a href="#" className="post-author">By { this.props.data.authorName }</a>
                        </div>
                        <p>{ this.props.data.body } </p>
                        <a href="#" className="btn bueno-btn">Steal it</a>
                        <a href="#" className="btn bueno-btn">Comment</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListItemLeft;
