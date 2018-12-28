import React from 'react';
import { render } from 'react-dom';
import './css/Hackerrank.css';
import Header from './Header';
import Footer from './Footer';
import Compiler from './Compiler';
import { ListGroup, ListGroupItem, Fade } from 'reactstrap';

class Hackerrank extends React.Component {
  render() {
    return (
      <div className="Hom">
        <Header />
        <body className="Hom-body">
        <ListGroup className="editor">
          <ListGroupItem>Complete the function solveMeFirst to compute the sum of two integers.<br></br>
            <br></br>Function prototype:<br></br>
            <br></br>int solveMeFirst(int a, int b);<br></br>
            <br></br>where,<br></br>
            <br></br>a is the first integer input.
            <br></br>b is the second integer input
            <br></br>Return values
            <br></br>sum of the above two integers
            <br></br>Sample Input
            <br></br>a = 2
            <br></br>b = 3
            <br></br>Sample Output
            <br></br>5
            <br></br>Explanation<br></br>
            <br></br>The sum of the two integers
            <br></br>and is computed as: . </ListGroupItem>
          <ListGroupItem className="compiler">
            <Compiler/>
        </ListGroupItem>
        <a href="/" className="btn btn-primary code" role="button">Submit My Codes</a>
      </ListGroup>
      </body>
      <Footer />
      </div>
    );
  }
}
export default Hackerrank;
