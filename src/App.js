import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import Counter from './component/counter';
//import Bind from './component/bind';
//import NativeEventDemo from './component/NativeEventDemo';
//import QrCode from './component/QrCode';
//import  TextArea from './component/TextArea';
//import Radio from './component/Radio';
//import Checkbox from './component/Checkbox';
//import Select from './component/Select';
//import SelectMore from './component/SelectMore';
//import Uncontroller from './component/Uncontrolled';
//import FormApp from './component/FormApp';
import PCIndex from './js/component/pc_index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PCIndex />
      </div>
    );
  }
}

export default App;
