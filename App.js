
// * Description: App Entry Point

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Router from './app/router'
import store from './app/redux/store';

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

/*
import React,{Component} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Provider} from 'react-redux'
import store from './app/redux/store'
//import reducer from './app/modules/home/reducer'
//import Router from './app/conf/routes'
import Router from './app/router'
//import routes from './app/conf/routes'
//import { Router } from 'react-native-router-flux'

export default class App extends React.Component{
  render(){
    return(
      <Provider store={store}>
          <Router/>
      </Provider>
    );
  }
}

/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/
