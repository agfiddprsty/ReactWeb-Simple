import React from 'react';
import { render } from 'react-dom';
import './css/Hackerrank.css';
import Header from './Header';
import Footer from './Footer';
import Compiler from './Compiler';
import { Card, CardImg, CardDeck,
  CardBody, Progress } from 'reactstrap';   
import { ListGroup, ListGroupItem, Fade } from 'reactstrap';

class Hackerrank extends React.Component {
  render() {
    return (
      <div className="Hom"> 
        <Header />
        <br></br>
        <div className="container text-left" style={{color:'#000000'}}>
                <a href="#" style={{color:'#847878',fontSize:"15px",fontWeight:100,padding:1}}>Practice</a> > <a href="#" style={{color:'#847878',fontSize:"15px",fontWeight:100,padding:1}}>Alghorithms</a> > <a href="#" style={{color:'#847878',fontSize:"15px",fontWeight:100,padding:1}}>Warmup</a> > <a  style={{color:'#c6c2c2',fontSize:"15px",fontWeight:100,padding:1}}>Test Bootcamp Arkademy</a> 
        <div className="container text-left">
      <h1 style={{
                    fontSize:'30px',color:'#000000',fontWeight:400,padding:10
                }}>TEST BOOTCAMP ARKADEMY</h1>
        <div className="container text-right">
      <h1 style={{
                  fontSize:'15px',color:'#e87000',fontWeight:100,padding:10
               }}>jawab soal dibawah ini dengan benar
               <br></br>
               untuk mengikuti seleksi Bootcamp Arkademy
                 </h1>
               
                
         <div class="w3-light-grey w3-tiny">
          <div class="w3-container w3-green" style={{width:"10%"}}>
          </div>

                <div className="container text-left" style={{color:'#000000'}}>
                <a href="#" style={{color:'#000000',fontWeight:400,padding:10}}>Problem</a> | <a href="#" style={{color:'#847878',fontWeight:400,padding:10}}>Submission</a> | <a href="#" style={{color:'#847878',fontWeight:400,padding:10}}>Leaderboard</a> | <a href="#" style={{color:'#847878',fontWeight:400,padding:10}}>Discussions</a> | <a href="#" style={{color:'#847878',fontWeight:400,padding:10}}>Editorial</a>
        <body className="Hom-body">
        <ListGroup className="editor">
          <ListGroupItem>Complete the function TestBootcampArkademy to compute the sum of two integers.<br></br>
            <br></br>Function prototype:<br></br>
            <br></br>int TestBootcampArkademy(int a, int b);<br></br>
            <br></br>where,<br></br>
            <br></br>• a is the first integer input.
            <br></br>• b is the second integer input<br></br>
            <br></br>Return values
            <br></br>• sum of the above two integers<br></br>
            <br></br>Sample Input
            <br></br>a = 2
            <br></br>b = 3<br></br>
            <br></br>Sample Output
            <br></br>5<br></br>
            <br></br>Explanation
            <br></br>The sum of the two integers a and b is computed as: 2 +3 = 5. </ListGroupItem>
          <ListGroupItem className="compiler">
          Input Your Answer
            <Compiler/>
        </ListGroupItem>
        <br></br>
        <a href="/" className="btn btn-success code" role="button">Submit Code</a>
      </ListGroup>
      </body>
      </div>
      </div>
      </div>
      </div>
      </div>
      <Footer />
      </div>
    );
  }
}
export default Hackerrank;
