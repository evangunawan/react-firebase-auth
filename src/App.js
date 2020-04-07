import React from 'react';
import './App.css';
import { BrowserRouter as Router, useHistory } from 'react-router-dom';
import Routes from './Routes';
import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyCxGM4-mxq-N0tbujJiPg48p0lN0yPf47c",
  authDomain: "dropthefat-web.firebaseapp.com",
  databaseURL: "https://dropthefat-web.firebaseio.com",
  projectId: "dropthefat-web",
  storageBucket: "dropthefat-web.appspot.com",
  messagingSenderId: "1066988631415",
  appId: "1:1066988631415:web:4611d3b9d16fb6fff25d72",
  measurementId: "G-TNQY273M9R"
};

firebase.initializeApp(firebaseConfig);

function App() {
  return (
    <Router>
      <Routes/>
    </Router>
  );
}

export default App;
