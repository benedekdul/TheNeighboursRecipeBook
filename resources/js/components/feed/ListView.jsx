import axios from 'axios';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ListItemRight from './ListItemRight';
import ListItemLeft from './ListItemLeft';

class ListView extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            this.props.posts.map(function (x,i) {
                return i%2 == 0 ? <ListItemLeft key={i} data={x}/> : <ListItemRight key={i} data={x}/>
            })
        );
    }
}

export default ListView;
