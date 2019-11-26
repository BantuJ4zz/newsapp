import React,{useState,useEffect,Component} from 'react';
import {
    Text,
    FlatList, 
    RefreshControl, 
    ActivityIndicator,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import * as const_ from '../../constants'
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import NewsItem from "../../components/NewsItem"
import {actions as home} from "../../index"

import a from '../../actions'


const country='us';
const url=`${const_.API_URL}country=${country}&apiKey=${const_.API_KEY}&pageSize=20`;

export default class Home extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
          title: "Source Listing",
          headerStyle: {backgroundColor: "#fff"},
          headerTitleStyle: {textAlign: "center",flex: 1}
         };
        };
    constructor(props) {
        super(props);
        this.state = {
            loading:true,
            //refreshing: false,
            dataSource:[]
        };
    }

    componentDidMount() {
        //this.props.test()
        //fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=2dd073b41fc9497c82ce9337acd17e4d")
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response=>response.json())
        .then((responseJson)=>{
            this.setState({
                loading:false,
                dataSource: responseJson
            })
        })
        .catch(error=>console.log(error))  
    }
    FlatListItemSeparator = () => {
        return (
          <View style={{
             height: .5,
             width:"100%",
             backgroundColor:"rgba(0,0,0,0.5)",
        }}
        />
        );
        }
        renderItem=(data)=>
        <TouchableOpacity style={styles.list}>
        <Text style={styles.lightText}>{data.item.name}</Text>
        <Text style={styles.lightText}>{data.item.email}</Text>
        <Text style={styles.lightText}>{data.item.company.name}</Text>
        <Text style={styles.lightText}>{data.item.website}</Text>
        </TouchableOpacity>
        render(){
         if(this.state.loading){
          return( 
            <View style={styles.loader}> 
              <ActivityIndicator size="large" color="#0c9"/>
            </View>
        )}
        return(
         <View style={styles.container}>
         <FlatList
            data= {this.state.dataSource}
            ItemSeparatorComponent = {this.FlatListItemSeparator}
            renderItem= {item=> this.renderItem(item)}
            keyExtractor= {item=>item.id.toString()}
         />
        </View>
        )}
        }
        const styles = StyleSheet.create({
            container: {
              flex: 1,
              backgroundColor: "#fff"
             },
            loader:{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#fff"
             },
            list:{
              paddingVertical: 4,
              margin: 5,
              backgroundColor: "#fff"
             }
          });
        

