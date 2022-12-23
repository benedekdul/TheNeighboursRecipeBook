import axios from 'axios';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AddPost from './AddPost'
import Header from '../Header';

class AddPostWrapper extends Component{
    constructor(props){
        super(props);

        this.state = {
            posts: []
        };
    }


    render(){
        return (

            
        <div className="container">
            <div className="row justify-content-center">
                <Header/>

                <AddPost/>
            </div>
        </div>
        );
    }
}

export default AddPostWrapper;
