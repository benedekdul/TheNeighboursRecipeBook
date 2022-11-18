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
        let self = this;
        return (
            this.props.posts.map(function (x,i) {
                return i%2 == 0 ? <ListItemLeft actionHandler={self.props.actionHandler} key={i} data={x}/> : <ListItemRight actionHandler={self.props.actionHandler} key={i} data={x}/>
            })
        );
    }
}

export default ListView;
