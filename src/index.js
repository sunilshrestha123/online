import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import styles from'./Assets/styles/App.css'
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
