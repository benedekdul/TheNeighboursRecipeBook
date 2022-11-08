import axios from 'axios';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class SinglePost extends Component{
    constructor(props){
        super(props);

        this.state = {
            userId: '',
            caption: '',
            body: '',
            img: '',
        };
    }

    componentDidMount(){
        this.getPost();
    }

    getPost(){
        axios.get('url').then(function (response) {
            console.log(response);
        });
    }

    render(){
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">post cap</div>
    
                            <div className="card-body">
                                some text
    
                                <img></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SinglePost;
