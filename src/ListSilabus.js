import React,{Component} from 'react';
import './css/App.css'
import { ListGroup, ListGroupItem } from 'reactstrap';
import './css/Home.css'
class ListSilabus extends Component{
    render(){
        return(
            <div className="ListGrup-Silabus" >
                
                <ListGroup className="saya">
                    <label>Class Curriculum</label>
                  <ListGroupItem active tag="a" action>Introduction</ListGroupItem>
                  <ListGroupItem tag="a" href="#" action>Repositry</ListGroupItem>
                </ListGroup>
                <ListGroup className="saya">
                  <ListGroupItem active tag="a" action>React-Basic</ListGroupItem>
                  <ListGroupItem tag="a" href="#" action>Instalation</ListGroupItem>
                  <ListGroupItem tag="a" href="#" action>Instalation</ListGroupItem>
                  <ListGroupItem tag="a" href="#" action>Instalation</ListGroupItem>
                  <ListGroupItem tag="a" href="#" action>Instalation</ListGroupItem>
                </ListGroup>
          </div>
        );
    }
}
export default ListSilabus;