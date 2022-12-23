import { preventOverflow } from '@popperjs/core';
import { initial } from 'lodash';
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import '../../css/style.css'
import AddPostWrapper from './Create/AddPostWrapper';
import Feed from './feed/Feed';
import Header from './Header';
import Profile from './Profile/Profile';
import AddPost from './Create/AddPost';
//import { useState } from 'react';


function App() {

    const [action, actionHandler] = useState("init");
    

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

    const passActionHandler = arg => {
        actionHandler(arg);
    }


    return (
         
         
        <div className="container">
            <div className="row justify-content-center">
                {/* components go here */}

                
                <Header/>
                < Profile/>
                
               </div>
               </div>
       
    );
}

export default App;
