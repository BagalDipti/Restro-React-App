import logo from './logo.svg';
import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.css"
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import { render } from '@testing-library/react';
import Menu from './Components/Menu';

class App extends Component {
  render(){
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Crazy Taste</NavbarBrand>
          </div>
        </Navbar>
        <Menu />

      </div>
       );
     }
  }
 

export default App;
