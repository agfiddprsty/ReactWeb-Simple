import React,{Component} from 'react';
import './css/Silabus.css';
import 'sass-loader';
import { List } from 'material-ui';
import Header from './HeaderSilabus';
import Footer from './Footer.js';
import './css/Home.css';
import {  CardDeck, } from 'reactstrap';
import Grid from 'material-ui';
import { Line } from 'rc-progress';
import Link from 'react-router-dom';

//this is Example JSON
const PostsData = [
  {
    "category": "Course",
    "title": "Video Tutorial: React Js untuk Pemula",
    "progress":"20",
    "text": "CNN purchased Casey Neistat's Beme app for $25million.",
    
    "image": "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/UbPJZK2wQJ2bMNUYGBLb"
  },
  {
    "category": "Travel",
    "title": "Nomad Lifestyle",
    "text": "Learn our tips and tricks on living a nomadic lifestyle",
    "image": "https://source.unsplash.com/user/_vickyreyes/600x400"
  },
  {
    "category": "Development",
    "title": "React and the WP-API",
    "text": "The first ever decoupled starter theme for React & the WP-API",
    "image": "https://source.unsplash.com/user/ilyapavlov/600x400"
  },
  {
    "category": "News",
    "title": "CNN Acquire BEME",
    "text": "CNN purchased Casey Neistat's Beme app for $25million.",
    "image": "https://source.unsplash.com/user/erondu/600x400"
  },
  {
    "category": "Travel",
    "title": "Nomad Lifestyle",
    "text": "Learn our tips and tricks on living a nomadic lifestyle",
    "image": "https://source.unsplash.com/user/_vickyreyes/600x400"
  },
  {
    "category": "Development",
    "title": "React and the WP-API",
    "text": "The first ever decoupled starter theme for React & the WP-API",
    "image": "https://source.unsplash.com/user/ilyapavlov/600x400"
  },
  {
    "category": "Travel",
    "title": "Nomad Lifestyle",
    "text": "Learn our tips and tricks on living a nomadic lifestyle",
    "image": "https://source.unsplash.com/user/_vickyreyes/600x400"
  },
  {
    "category": "Travel",
    "title": "Nomad Lifestyle",
    "text": "Learn our tips and tricks on living a nomadic lifestyle",
    "image": "https://source.unsplash.com/user/_vickyreyes/600x400"
  },

]
class ListSilabus extends Component{
  
  constructor() {
    super();
    
    this.state = {
      posts: {}
    }
  }
  componentWillMount() {
    this.setState({
      posts: PostsData
    });
  }
  ListBTNHandle(){
    this.props.history.push("/Silabus/Detail");
  }
    render(){
      
        return(
          <div className="app">
            <Header />
            <div className="app-card-list" id="app-card-list">
            {
              Object
              .keys(this.state.posts)
              .map(key => <Card key={key} index={key} details={this.state.posts[key]}/>)
            }
            </div>
          </div>
        );
    }
}


class Button extends React.Component {
  render() {
    return (
      <button className="button button-primary"   >
        <i onClick={this.ListBTNHandle} className="fa fa-chevron-right"></i> Lets Study
      </button>

    )
  }
}


class CardHeader extends React.Component {
  render() {
    const { image, category } = this.props;
    var style = { 
        backgroundImage: 'url(' + image + ')',
    };
    return (
      <header style={style} className="card-header">
        <h4 className="card-header--title">{category}</h4>
      </header>
    )
  }
}


class CardBody extends React.Component {
  render() {
    return (
      <div className="card-body">
        <p className="date">March 20 2015</p>
        
        <h6>{this.props.title}</h6>
        
        <div className="progressbar-silabus">
        <Line percent="50" strokeWidth="4" strokeColor="#341cac" />
          </div>
        
        <Button />
      </div>
    )
  }
}


class Card extends React.Component {
  render() {
    return (
      <article className="card">
        <CardHeader category={this.props.details.category} image={this.props.details.image}/>
        <CardBody title={this.props.details.title} text={this.props.details.text}/>
      </article>
    )
  }
}
export default ListSilabus;