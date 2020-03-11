import React from 'react';
import ReactDOM from 'react-dom';

// import App from './App';

import './style.css';


class App extends React.Component {
    render() {
        return 'Child';
    }
}


const root = document.getElementById('root');

ReactDOM.render(<App />, root);


// const childElm = document.createTextNode('Hello World');

// root.appendChild(childElm)