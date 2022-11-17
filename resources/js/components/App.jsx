import { preventOverflow } from '@popperjs/core';
import { initial } from 'lodash';
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import '../../css/style.css'
import AddPost from './Create/AddPost';
import Feed from './feed/Feed';
import Header from './Header';
import Login from './Auth/Login';
//import { useState } from 'react';


function App() {

    const [action, actionHandler] = useState("login");
    

    let debug = true;

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

    const post_posted = arg => {
        actionHandler(arg);
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                {/* components go here */}
                <Header/>
                {/* <AddPost post_posted={post_posted}/> */}
                {action == "login" ? (
                        <>
                            <Login/> 
                        </>
                    ) : null
                }
                {action == "post_create"  ? ( 
                        <>
                            <AddPost post_posted={post_posted} />
                            <hr></hr>
                            <button onClick={(create_post_hide)}> Cancel </button>
                        </>
                    ) : null
                }
                {action == "init" ? (
                        <>
                            <button onClick={(create_post_show)}> Create Post </button>
                            <hr></hr>
                            <Feed/> 
                            
                        </>
                        
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
