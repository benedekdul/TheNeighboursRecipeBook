import React from 'react';
import ReactDOM from 'react-dom';
import '../../css/style.css'
import Feed from './feed/Feed';
import Header from './Header';


function App() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                {/* components go here */}
                <Header/>

                <Feed/>
            </div>
        </div>
    );
}

export default App;
