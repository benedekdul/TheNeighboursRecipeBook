import React from 'react';
import ReactDOM from 'react-dom';
import '../../css/style.css'
import ListView from './feed/ListView';
import Header from './Header';


function App() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                {/* components go here */}
                <Header/>

                <ListView/>
            </div>
        </div>
    );
}

export default App;
