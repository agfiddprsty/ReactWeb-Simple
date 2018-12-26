import React, { Component } from 'react';
import HeaderSilabus from './Header';
import { Container, Row, Col } from 'reactstrap';
import './css/App.css';
import InfoSilabus from './InfoSilabus';
import ListSilabus from './ListSilabus';

class Silabus extends Component{
    render(){
        return(
            <div className="App">
                <HeaderSilabus/>
                <Container>
                    <Row>
                        <Col xs="4"  >
                            <div className="Info-Silabus">
                                <InfoSilabus/>
                            </div> 
                        </Col>
                        <Col xs="6" >
                            <div className="List-Silabus">

                                <ListSilabus/>
                            </div>
                        </Col>
                    </Row>
                </Container>
          </div>
        );
    }
}

export default Silabus;