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
        
                        <div className="col-12 col-lg-4 col-xl-4">
                            <div className="recipe-info">
                                <h5>Info</h5>
                                <ul className="info-data">
                                    <li><img src="img/core-img/eye.png" alt=""></img><span>1,577 Views</span></li>
                                    <li><img src="img/core-img/alarm-clock.png" alt=""></img> <span>30 min</span></li>
                                    <li><img src="img/core-img/tray.png" alt=""></img> <span>Serves 4</span></li>
                                    <li><img src="img/core-img/sandwich.png" alt=""></img> <span>Easy</span></li>
                                    <li><img src="img/core-img/compass.png" alt=""></img> <span>200F</span></li>
                                </ul>
                            </div>
        
                            <div className="ingredients">
                                <h5>Ingredients</h5>
        
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="customCheck1"></input>
                                    <label className="custom-control-label" htmlFor="customCheck1">4 Tbsp (57 gr) butter</label>
                                </div>
        
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="customCheck2"></input>
                                    <label className="custom-control-label" htmlFor="customCheck2">2 large eggs</label>
                                </div>
        
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="customCheck3"></input>
                                    <label className="custom-control-label" htmlFor="customCheck3">2 yogurt containers granulated sugar</label>
                                </div>
        
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="customCheck4"></input>
                                    <label className="custom-control-label" htmlFor="customCheck4">1 vanilla or plain yogurt, 170g container</label>
                                </div>
        
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="customCheck5"></input>
                                    <label className="custom-control-label" htmlFor="customCheck5">2 yogurt containers unbleached white flour</label>
                                </div>
        
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="customCheck6"></input>
                                    <label className="custom-control-label" htmlFor="customCheck6">1.5 yogurt containers milk</label>
                                </div>
        
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="customCheck7"></input>
                                    <label className="custom-control-label" htmlFor="customCheck7">1/4 tsp cinnamon</label>
                                </div>
        
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="customCheck8"></input>
                                    <label className="custom-control-label" htmlFor="customCheck8">1 cup fresh blueberries </label>
                                </div>
                            </div>
                        </div>
        
                        <div className="col-12 col-sm-9 col-md-6 col-lg-4 col-xl-3">
                            <div className="sidebar-area">
        
                                <div className="single-widget-area author-widget mb-30">
                                    <div className="background-pattern bg-img" style={{backgroundimage: "img/core-img/pattern2.png"}}>
                                        <div className="author-thumbnail">
                                            <img src="img/bg-img/23.jpg" alt=""></img>
                                        </div>
                                    </div>
                                    <div className="social-info">
                                        <a href="#">Follow <i className="fa fa-user" aria-hidden="true"></i></a>
                                    </div>
                                </div>
        
                                <div className="single-widget-area post-widget mb-30">
                                    <div className="single-post-area d-flex">
                                        <div className="blog-thumbnail">
                                            <img src="img/bg-img/12.jpg" alt=""></img>
                                        </div>
                                        <div className="blog-content">
                                            <a href="#" className="post-title">Friend eggs with ham</a>
                                            <div className="post-meta">
                                                <a href="#" className="post-date">July 11, 2018</a>
                                                <a href="#" className="post-author">By Julia Stiles</a>
                                            </div>
                                        </div>
                                    </div>
        
                                    <div className="single-post-area d-flex">
                                        <div className="blog-thumbnail">
                                            <img src="img/bg-img/13.jpg" alt=""></img>
                                        </div>
                                        <div className="blog-content">
                                            <a href="#" className="post-title">Burger with fries</a>
                                            <div className="post-meta">
                                                <a href="#" className="post-date">July 11, 2018</a>
                                                <a href="#" className="post-author">By Julia Stiles</a>
                                            </div>
                                        </div>
                                    </div>
        
                                    <div className="single-post-area d-flex">
                                        <div className="blog-thumbnail">
                                            <img src="img/bg-img/14.jpg" alt=""></img>
                                        </div>
                                        <div className="blog-content">
                                            <a href="#" className="post-title">Avocado &amp; Oisters</a>
                                            <div className="post-meta">
                                                <a href="#" className="post-date">July 11, 2018</a>
                                                <a href="#" className="post-author">By Julia Stiles</a>
                                            </div>
                                        </div>
                                    </div>
        
                                    <div className="single-post-area d-flex">
                                        <div className="blog-thumbnail">
                                            <img src="img/bg-img/15.jpg" alt=""></img>
                                        </div>
                                        <div className="blog-content">
                                            <a href="#" className="post-title">Tortilla prawns</a>
                                            <div className="post-meta">
                                                <a href="#" className="post-date">July 11, 2018</a>
                                                <a href="#" className="post-author">By Julia Stiles</a>
                                            </div>
                                        </div>
                                    </div>
        
                                    <div className="single-post-area d-flex">
                                        <div className="blog-thumbnail">
                                            <img src="img/bg-img/16.jpg" alt=""></img>
                                        </div>
                                        <div className="blog-content">
                                            <a href="#" className="post-title">Burger with fries</a>
                                            <div className="post-meta">
                                                <a href="#" className="post-date">July 11, 2018</a>
                                                <a href="#" className="post-author">By Julia Stiles</a>
                                            </div>
                                        </div>
                                    </div>
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
