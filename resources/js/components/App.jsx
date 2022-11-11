import React from 'react';
import ReactDOM from 'react-dom';
import '../../css/style.css'
import AddPostWrapper from './Create/AddPostWrapper';
import Feed from './feed/Feed';
import Header from './Header';
import Profile from './Profile/Profile';


function App() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                {/* components go here */}
               
                <Profile/>
            </div>
        </div>
    );
}

export default App;
