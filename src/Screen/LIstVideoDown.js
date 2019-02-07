import React, { Component } from 'react';
import quiz from './quiz.png'
import { Card, CardImg, CardDeck,
    CardBody, Progress } from 'reactstrap';   
import rnredux from './rnreduxplay.png';

class ListVideoDown extends Component{
    render(){
        return(
            <div style={{marginLeft:"500px"}}>
                <h3> Berikutnya</h3>
                <div className="col-md-12">
                    <CardDeck className="deck border border-0">
                        <Card className="border border-0"><a href="/video" className="modul">
                            <CardImg top width="10%" src={rnredux} alt="Card image cap" className="rounded imgcard"/>
                            <CardBody className="crdbdy">
                                <h5>1.Perkenalan</h5>
                                <br></br>
                            </CardBody>
                            </a>
                        </Card>
                    </CardDeck>
                    <CardDeck className="deck border border-0">
                        <Card className="border border-0"><a href="/video" className="modul">
                            <CardImg top width="10%" src={rnredux} alt="Card image cap" className="rounded imgcard"/>
                            <CardBody className="crdbdy">
                                <h5>1.Perkenalan</h5>
                                <br></br>
                            </CardBody>
                            </a>
                        </Card>
                    </CardDeck>
                    <CardDeck className="deck border border-0">
                        <Card className="border border-0"><a href="/video" className="modul">
                            <CardImg top width="10%" src={rnredux} alt="Card image cap" className="rounded imgcard"/>
                            <CardBody className="crdbdy">
                                <h5>1.Perkenalan</h5>
                                <br></br>
                            </CardBody>
                            </a>
                        </Card>
                    </CardDeck>
                </div>
            </div>
        )
    }
}
export default ListVideoDown;