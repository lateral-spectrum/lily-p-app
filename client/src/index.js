import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import HomePage from './pages/HomePage/HomePage'; 

ReactDOM.render(<HomePage/>, document.getElementById('root'));
registerServiceWorker();
