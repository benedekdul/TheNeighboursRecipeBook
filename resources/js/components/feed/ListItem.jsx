import axios from 'axios';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class ListItem extends Component{
    constructor(props){
        super(props);
    }

    displayTime(){
        let d = new Date(this.props.data.created_at);
        return `${d.getFullYear()}. ${d.getMonth()}. ${d.getDay()}. | ${d.getHours()}:${d.getMinutes()}`;
    }

    render(){
        return (
            <div className="row align-items-center">
                <div className="col-12 col-md-6">
                    <div className="big-post-thumbnail mb-50">
                        <img src="https://www.jessicagavin.com/wp-content/uploads/2020/09/how-to-fry-an-egg-3-1200.jpg" alt=""></img>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div className="big-post-content text-center mb-50">
                        <a href="#" className="post-tag">#Tags #Tags #Tags</a>
                        <a href="#" className="post-title">{ this.props.data.caption }</a>
                        <div className="post-meta">
                            <a href="#" className="post-date">{ this.displayTime() }</a>
                            <a href="#" className="post-author">By { this.props.data.authorName }</a>
                        </div>
                        <p>{ this.props.data.caption } </p>
                        <a href="#" className="btn bueno-btn">Steal it</a>
                        <a href="#" className="btn bueno-btn">Comment</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListItem;
