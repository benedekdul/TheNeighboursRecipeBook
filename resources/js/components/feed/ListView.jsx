import axios from 'axios';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ListItemRight from './ListItemRight';
import ListItemLeft from './ListItemLeft';

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
                return i%2 == 0 ? <ListItemLeft key={i} data={x}/> : <ListItemRight key={i} data={x}/>
            })
        );
    }
}

export default ListView;
