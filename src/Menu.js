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
     <div class="alert alert-success alert-dismissible fade show">
       <button type="button" class="close" data-dismiss="alert">&times;</button>
  <strong>Welcome Admin!</strong> this is page admin
</div>
  <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
  <a class="navbar-brand" href="#">Home</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="collapsibleNavbar">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="#">Data Siswa</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Batch</a>
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
      <h2>Menu</h2>   
      <ul class="nav nav-pills flex-column">
        <li class="nav-item">
          <a class="nav-link active" href="#">Curriculum</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Courses</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Quiz</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Certificate Design</a>
        </li>
      </ul>
      <hr class="d-sm-none"/>
    </div>
    <div class="col-sm-8">
      <h2>Curriculum</h2>
      <h5>Curriculum description</h5>
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