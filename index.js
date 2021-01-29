import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';


import React, {Component} from 'react';  
import './App.css';  

class App extends Component {  
  render(){  
    return (  
      <div className="App container">  
        <div className="alert alert-info">  
          <h3 className="text-danger">Ini Project Pertama React JS</h3>  
          <p>Belajar React JS itu mudah</p>  
          <button className="mr-1 btn btn-success">Setuju</button>  
          <button className="btn btn-info">Iya Dong</button>  
        </div>  
      </div>  
    );  
  }  
}  
export default App;  


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
