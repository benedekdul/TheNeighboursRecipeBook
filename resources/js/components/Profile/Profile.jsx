import axios from 'axios';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ListView from '../feed/ListView'


class Profile extends Component
{
    state = {
        mode: "grid",
        name: '',
        bio: 'Welcome to my profile! My passion is cooking',
        profile_pic: undefined,
        posts_count: 0,
        followers: 0,
        following: 0,
        follow: false,
        posts: []
    }


    async componentDidMount(){

        //gets the id from the path
        const user_id = this.props.match.params.user_id;

        const res = await axios.get(`get-profile/${user_id}`);
        if(res.data.status === 200)
        {
            this.setState({
                name: res.data.posts.user_id,
                posts: res.data.posts
            });
        }
    }


    handleTab = () => {
        if(this.state.mode == "grid") {
            this.tab_grid.classList.remove("is-active")
            this.tab_list.classList.add("is-active")
            this.setState({mode: "list"})
        } 
        
        else if(this.state.mode == "list") {
            this.tab_list.classList.remove("is-active")
            this.tab_grid.classList.add("is-active")
            this.setState({mode: "grid"})
        }
    }


    //TODO
    handleFollow = () => {
    }

    render(){
        return (
            <div className="profile">
            <div className="card">
                <header className="card-header">
                    <figure className="image profile-avatar">
                        <img className="is-rounded" src={this.state.profile_pic} alt=""/>
                    </figure>
                    <div className="card-header-content profile-info">
                        <h1 className="title">{this.state.name}</h1>
                        <div className="stats">
                            <ul>
                                <li><span className="post_count">{this.state.posts_count}</span> posts</li>
                                <li><span className="followers">{this.state.followers}</span> followers</li>
                                <li><span className="following">{this.state.following}</span> following</li>
                            </ul>
                        </div>
                        <p>
                        {this.state.bio}
                        </p>
                        <div className="profile-options">
                        {this.state.follow ? 
                            <button onClick={this.handleFollow} className="button is-primary is-small">Unfollow</button>
                            :
                            <button onClick={this.handleFollow} className="button is-primary is-outline is-small">Follow</button>
                        }
                        </div>
                    </div>

                </header>
                <div className="card-content">
                    <div className="tabs is-centered">
                        <ul>
                        <li ref={(tab) => this.tab_grid = tab} className="tab-grid is-active" onClick={this.handleTab}><a>Grid</a></li>
                        <li ref={(tab) => this.tab_list = tab} className="tab-list" onClick={this.handleTab}><a>List</a></li>
                        </ul>
                    </div>
                    {this.state.mode == "grid" ? <ListView posts={this.state.posts}/> : <ListView posts={this.state.posts}/> }
                    
                    </div>
                </div>
            </div>

        );
    }

}

export default Profile;