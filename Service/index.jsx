/* This needs to be able to communicate with PAckage.json and be in the same spot */import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './src/App';
// why is this broken?
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);