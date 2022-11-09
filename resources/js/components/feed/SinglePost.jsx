import axios from 'axios';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class SinglePost extends Component{
    constructor(props){
        super(props);

        this.state = {
            postId: '',
            userId: '',
            caption: '',
            image: '',
            createdAt: '',
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
                userId: response.data.user_id,
                caption: response.data.caption,
                createdAt: response.data.created_at,
                image: response.data.image
            });
        });
    }

    render(){
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">{this.state.caption}</div>
                            <div className="card-body">
                                image: { this.state.image}

                                created at: {this.state.createdAt}
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SinglePost;
