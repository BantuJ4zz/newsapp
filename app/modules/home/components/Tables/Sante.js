import React,{Component} from 'react'
import {View,Text,StyleSheet} from 'react-native'

export default class Sante extends React.Component{
    render(){
        return(
            <View style={style.container}>
                <Text>Sante</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });