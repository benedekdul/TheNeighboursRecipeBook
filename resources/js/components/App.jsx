import React from 'react';
import ReactDOM from 'react-dom';
import SinglePost from './feed/SinglePost'

import '../../css/style.css'

function App() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                {/* components go here */}

                <SinglePost/>
            </div>
        </div>
    );
}

export default App;
