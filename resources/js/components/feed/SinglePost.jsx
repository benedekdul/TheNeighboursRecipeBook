import axios from 'axios';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class SinglePost extends Component{
    constructor(props){
        super(props);

        this.state = {
            authorName: 'Kormos Béla',
            caption: '',
            body: 'Nagyon fincsi nagyon jo hami nyami kavarom a pudingom :P',
            tags: '',
            image: '',
            createdAt: ''
        };
    }

    componentDidMount(){
        this.getPost();
    }

    getPost(){
        let self = this;
        axios.get('test').then(function (response) {
            self.setState({
                postId: response.data.id,
                userName: response.data.user_id,
                caption: response.data.caption,
                createdAt: response.data.created_at,
                image: response.data.image
            });
        });
    }

    dateTime(){
        let d = new Date(this.state.createdAt);
        return `${d.getFullYear()}. ${d.getMonth()}. ${d.getDay()}. | ${d.getHours()}:${d.getMinutes()}`;
    }

    render(){
        return (
            <div className="single-blog-post style-1 d-flex flex-wrap mb-30">
                <div className="blog-thumbnail">
                    <img src="https://img.jamieoliver.com/jamieoliver/recipe-database/oldImages/large/576_1_1438868377.jpg" alt=""></img>
                </div>
                <div className="blog-content">
                    <a className="post-tag">#Tags #Tags #Tags #Tags</a>
                    <a href="#" className="post-title">{ this.state.caption }</a>
                    <p>{ this.state.body }</p>
                    <div className="post-meta">
                        <a href="#" className="post-date">{ this.dateTime() }</a>
                        <a href="#" className="post-author">By { this.state.authorName }</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default SinglePost;
