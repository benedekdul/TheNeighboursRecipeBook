import axios from 'axios';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class FullPost extends Component{
    constructor(props){
        super(props);

        this.state = {
            data: ''
        }
    }

    displayTime(){
        let d = new Date(this.state.data.created_at);
        return `${d.getFullYear()}. ${d.getMonth()}. ${d.getDay()}. | ${d.getHours()}:${d.getMinutes()}`;
    }

    fetchPostData(){
        let self = this;
        axios.get(`post/${this.props.id}`).then(function (response) {
            self.setState({
                data: response.data
            });
            console.log(self.state.data);
        });
    }

    componentDidMount(){
        // console.log(this.props);

        this.fetchPostData();

    }

    render(){
        return (
            <section className="post-news-area section-padding-100-0 mb-70">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-4 col-xl-5">
                            <div className="post-details-content mb-100">
                                <div className="blog-thumbnail mb-50">
                                    <img src={"/images/"+this.state.data.original_filename} alt=""></img>
                                </div>
                                <div className="blog-content">
                                    <a href="#" className="post-tag">Healthy Food</a>
                                    <h4 className="post-title">{this.state.data.caption}</h4>
                                    <div className="post-meta mb-50">
                                        <a href="#" className="post-date">{this.displayTime()}</a>
                                        <a href="#" className="post-author">By {this.state.data.authorName}</a>
                                    </div>
                                    <p>{this.state.data.body}</p>
                                    {/* <h5 className="mb-30">Step 1</h5>
                                    <p className="mb-30">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tristique justo id elit bibendum pharetra non vitae lectus. Mauris libero felis, dapibus a ultrices sed, commodo vitae odio. Sed auctor tellus quis arcu tempus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac tincidunt nunc. Cras sed mollis erat. Quisque risus lorem, mattis nec nisl a, efficitur faucibus ligula. Nulla facilisi. Integer sodales, metus nec finibus lobortis, ex justo pharetra quam, vel vehicula urna turpis ut risus. Sed dignissim erat sapien, non malesuada justo cursus nec. Nunc porta pulvinar varius.</p>
        
                                    <h5 className="mb-30">Step 2</h5>
                                    <p className="mb-30">Suspendisse nisl leo, gravida quis tortor at, ornare commodo neque. Donec tortor turpis, pharetra et pulvinar vitae, ullamcorper et mi. Sed eu magna aliquam, suscipit massa sit amet, mattis augue. Nam ut tortor ut ligula molestie feugiat vitae et nulla. Sed porta erat vitae leo pellentesque malesuada. In sollicitudin, massa euismod aliquet volutpat, enim metus varius dui, vestibulum efficitur ante velit non nisi. Cras varius bibendum sapien, id tincidunt velit placerat id. Nunc vitae facilisis nunc. Suspendisse ut felis sagittis mauris faucibus tincidunt vitae id tortor. Nullam tincidunt finibus turpis, a accumsan mauris laoreet cursus. Phasellus pharetra odio sapien, id suscipit nisi lobortis ut.</p>
        
                                    <h5 className="mb-30">Step 3</h5>
                                    <p className="mb-30">Duis posuere odio vitae neque egestas luctus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer risus neque, sollicitudin pharetra pulvinar a, imperdiet porttitor nunc. Aenean pretium, libero eu pulvinar commodo, lorem enim bibendum est, vel suscipit est mi non tortor. Vestibulum sit amet pretium tortor. Donec posuere, dui quis dictum hendrerit, odio mauris aliquam lacus, eu egestas libero risus vel nisi. Proin condimentum varius lectus sed dapibus.</p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default FullPost;
