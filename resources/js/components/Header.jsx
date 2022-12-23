import axios from 'axios';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import user from './Auth/User';


class Header extends Component{
    constructor(props){
        super(props);
    }

    handleLogout(){
        user.logout();
        this.props.actionHandler('login');
        console.log('kileptel bazmeee:P');
    }

    render(){
        return (
            <header className="header-area">


            {/* style="background-image: url(img/bg-img/header.jpg);" */}
            <div className="top-header-area bg-img bg-overlay">
                <div className="container h-100">
                    <div className="row h-100 align-items-center justify-content-between">
                        <div className="col-12 col-sm-6">

                            <div className="top-social-info">
                                <a onClick={()=>{this.handleLogout()}} href="#" data-toggle="tooltip" data-placement="bottom" title="Logout"><i className="fa fa-user" aria-hidden="true"></i></a>
                                {/* <a href="#" data-toggle="tooltip" data-placement="bottom" title="Profile"><i className="fa fa-comments-o" aria-hidden="true"></i></a> */}

                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-5 col-xl-4">

                            <div className="top-search-area">
                                <form action="#" method="post">
                                    <input type="search" name="top-search" id="topSearch" placeholder="Search"></input>
                                    <button type="submit" className="btn"><i className="fa fa-search"></i></button>
                                </form>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>

            <div className="logo-area">
                <a href="/"><img src="img/core-img/logo.png" alt=""></img></a>
            </div>

            </header>
        );
    }
}

export default Header;