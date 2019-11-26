import React,{Component} from 'react'
import {View,Text,StyleSheet} from 'react-native'

export default class General extends React.Component{
    render(){
        return(
            <View style={style.container}>
                <Text>General</Text>
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