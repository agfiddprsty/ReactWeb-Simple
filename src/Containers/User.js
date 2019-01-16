import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import setNews from '../actions/fetchNews'
import News from '../screens/News';
const mapStateToProps = (state) => {
  return{
    data: state.news.data,
    fetchednews: state,
  };
}

const mapDispatchToProps = (dispatch) => ({
setNews: ()=>{
  dispatch(setNews())
}
});

export default connect(mapStateToProps,mapDispatchToProps) (News);
