import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import setLink from '../actions/fetchLink'
import Link from '../screens/Link';
const mapStateToProps = (state) => {
  return{
    data: state.link.data,
    fetchedlink: state,
  };
}

const mapDispatchToProps = (dispatch) => ({
setNews: ()=>{
  dispatch(setLink())
}
});

export default connect(mapStateToProps,mapDispatchToProps) (Link);
