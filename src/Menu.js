import React, { Component } from 'react';
import { Jumbotron, Container, Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import logo from './logo.svg';
import './Menu.css';
import './App.css';

class Menu extends Component {
  render() {
    return (
<div className="App">
      <div className="jumbotron text-center" >
        <h1>Welcome Admin!</h1>
        <p>this is the page of admin</p> 
      </div>
  <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="collapsibleNavbar">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="#">Data Siswa</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Keterampilan</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Score</a>
      </li>    
    </ul>
  </div>  
</nav>

<div class="container" >
  <div class="row">
    <div class="col-sm-4">
      <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
      <h3>Some Links</h3>
      <p>Lorem ipsum dolor sit ame.</p>
      <ul class="nav nav-pills flex-column">
        <li class="nav-item">
          <a class="nav-link active" href="#">Active</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#">Disabled</a>
        </li>
      </ul>
      <hr class="d-sm-none"/>
    </div>
    <div class="col-sm-8">
      <h2>TITLE HEADING</h2>
      <h5>Title description</h5>
      <p>The Text</p> 
      <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
      <br></br>
      <h2>TITLE HEADING</h2>
      <h5>Title description</h5>
      <p>The Text</p>
      <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
    </div>
  </div>
</div>
<div class="jumbotron text-center">
  <p>Footer</p>
</div>
</div>
    );
  }
}
export default Menu;