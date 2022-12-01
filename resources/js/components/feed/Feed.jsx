import axios from 'axios';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ListView from './ListView'

/**
 * This class represents the feed component where the posts are shown.
 */
class Feed extends Component{
    constructor(props){
        super(props);

        this.state = {
            /** List of all posts. */
            posts: [],
            /** Debug value. */
            debug : false
            
        };
    }

    componentDidMount(){
        this.getPosts();
    }

    /**
     * Gets all the data of the available posts.
     */
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
