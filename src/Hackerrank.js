import React from 'react';
import { render } from 'react-dom';
import './Home.css';
import Header from './Header';
import Footer from './Footer';
import Compiler from './Compiler';
import MonacoEditor from 'react-monaco-editor';
import { ListGroup, ListGroupItem, Fade } from 'reactstrap';

class Hackerrank extends React.Component {
  constructor(props) {
    super(props);
  }
  editorDidMount(editor, monaco) {
    console.log('editorDidMount', editor);
    editor.focus();
  }
  onChange(newValue, e) {
    console.log('onChange', newValue, e);
  }
  render() {
    const options = {
      selectOnLineNumbers: true
    };
    return (
      <div className="Hom">
        <Header />
        <body className="Hom-body">
        <ListGroup className="editor">
          <ListGroupItem>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh sit amet commodo nulla facilisi nullam vehicula. Mauris pharetra et ultrices neque ornare aenean euismod elementum nisi. Elit ut aliquam purus sit. Blandit massa enim nec dui nunc. Scelerisque viverra mauris in aliquam sem. Non pulvinar neque laoreet suspendisse interdum consectetur libero id. Ornare massa eget egestas purus viverra accumsan in. Ultricies mi eget mauris pharetra et ultrices. Morbi tristique senectus et netus et malesuada fames ac. Ultrices tincidunt arcu non sodales neque sodales ut. Donec massa sapien faucibus et molestie. Nulla facilisi morbi tempus iaculis urna. Et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. In hac habitasse platea dictumst vestibulum. Erat velit scelerisque in dictum non consectetur a. Vestibulum lectus mauris ultrices eros in cursus. Vulputate odio ut enim blandit volutpat maecenas volutpat blandit.</ListGroupItem>
          <ListGroupItem className="compiler">
            <Compiler/>
        </ListGroupItem>
        <a href="#" className="btn btn-primary code" role="button">Submit My Codes</a>
      </ListGroup>
      </body>
      <Footer />
      </div>
    );
  }
}
export default Hackerrank;
