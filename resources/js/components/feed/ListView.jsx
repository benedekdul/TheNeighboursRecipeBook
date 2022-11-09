import axios from 'axios';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ListItem from './ListItem';

class ListView extends Component{
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
            this.state.posts.map(function (x,i) {
                return <ListItem key={i} data={x}/>
            })
        );
    }
}

export default ListView;
