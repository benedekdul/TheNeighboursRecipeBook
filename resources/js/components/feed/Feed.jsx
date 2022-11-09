import axios from 'axios';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ListView from './ListView'

class Feed extends Component{
    constructor(props){
        super(props);

        this.state = {
            posts: []
        };
    }

    componentDidMount(){
        this.getPosts();
    }

    getPosts(){
        let self = this;
        axios.get('testAll').then(function (response) {
            self.setState({
                posts: response.data
            });
        });
    }

    render(){
        return (
            <ListView posts = {this.state.posts}/>
        );
    }
}

export default Feed;
