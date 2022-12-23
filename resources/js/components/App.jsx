import { preventOverflow } from '@popperjs/core';
import { initial } from 'lodash';
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
//import '../../css/style.css'
import AddPostWrapper from './Create/AddPostWrapper';
import Feed from './feed/Feed';
import Header from './Header';
import Profile from './Profile/Profile';
import AddPost from './Create/AddPost';
import Login from './Auth/Login';
import Register from './Auth/Register';

import user from "./Auth/User";
//import { useState } from 'react';

import FullPost from "./feed/FullPost";


function App() {

    //console.log(user, user.isLoggedIn());

    const [action, actionHandler] = useState(user.isLoggedIn() ? "init" : "login");

    let debug = false;

    /* if(action == "init")
    {
        content = <Feed />
    }
    else if(state.action == "post_create")
    {
        content = <AddPost />
    } */

    function create_post_show()
    {
        actionHandler("post_create");
        //console.log("Post creation showing " + action);
    }

    function create_post_hide()
    {
        actionHandler("init");
        //console.log("Post creation hidden " + action);
    }

    const passActionHandler = arg => {
        actionHandler(arg);
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                {/* components go here */}
                <Header actionHandler={passActionHandler}/>
                {/* <AddPost post_posted={post_posted}/> */}
                {action == "login" ? (
                        <div className="col-md-12">
                            <Login actionHandler={passActionHandler}/> 
                        </div>
                    ) : null
                }
                {action == "register" ? (
                        <div className="col-md-12">
                            <Register actionHandler={passActionHandler}/> 
                        </div>
                    ) : null
                }
                {action == "post_create"  ? ( 
                         <div className="col-md-12">
                            <AddPost post_posted={passActionHandler} />
                            <hr></hr>
                            <button onClick={(create_post_hide)}> Cancel </button>
                        </div>
                    ) : null
                }
                {action == "init" ? (
                        <div className="col-md-12">
                            <button onClick={(create_post_show)}> Create Post </button>
                            <hr></hr>
                            <Feed actionHandler={passActionHandler}/>  
                        </div>
                        
                    ) : null
                }
                {action.includes("post/") ? (
                        <div className="col-md-12">
                            <FullPost id={action.split('/')[1] - 0}/>  
                        </div>
                        
                    ) : null
                }
                { debug ? (
                        <p>Current state: {action}</p>
                    ) : null
                    
                }
                
               </div>
               </div>
       
    );
}

export default App;
