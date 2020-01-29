import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';


const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "bugtracker-69120.firebaseapp.com",
  databaseURL: "https://bugtracker-69120.firebaseio.com",
  projectId: "bugtracker-69120",
  storageBucket: "bugtracker-69120.appspot.com",
  messagingSenderId: "274645896574",
  appId: "1:274645896574:web:a70f3c0d672b56bc97372f"
};

console.log("API Key " + process.env.REACT_APP_API_KEY)

firebase.initializeApp(firebaseConfig)

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
