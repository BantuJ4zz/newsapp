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
import axios from 'axios'
import * as const_ from '../../constants'
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import NewsItem from "../../components/NewsItem"
import {actions as home} from "../../index"

import a from '../../actions'

const country='us';
const url=`${const_.API_URL}country=${country}&apiKey=${const_.API_KEY}&pageSize=20`;

/*
export default class APICalling extends React.Component{
    state={dataSource:[]}
    componentDidMount(){
        //axios.get(url)
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=>{
            const dataSource=res.data;
            this.setState({dataSource});
            console.log(res.data)
        })
    }
    render(){
        return(
            <View>

                {this.state.dataSource.map(person=>{person.name})}
          

            </View>
            
        );
    }
}
*/


const {getNewsHeadlines} = home;

 class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false
        }
    }
    
    componentDidMount(){
       // this.props.test()
       this.getNewsHeadlines()
    }
    

    getNewsHeadlines = (refreshing = true) => {
        this.setState({refreshing});
        this.getNewsHeadlines()
            .finally(() => this.setState({refreshing: false}));
    }

    renderItem = ({item, index}) => {
        return <NewsItem article={item}/>
        //console.log(a)
    }



   
        
render() {
    
    //return (<View></View>)
   
            const {isFetching,articles,hasError,errorMsg} = this.props;
    
            if (isFetching) return <ActivityIndicator/>
            else {
                return (
                    <FlatList
                        style={{backgroundColor:'#eaeaea'}}
                        contentContainerStyle={{paddingVertical:5,}}
                        ref='listRef'
                        data={articles}
                        extraData={this.state}
                        renderItem={this.data}
                        initialNumToRender={10}
                        keyExtractor={(item, index) => index.toString()+"_home"}
                        
                        refreshControl={
                            <RefreshControl
                                refreshing={this.state.refreshing}
                                onRefresh={this.getnewsHeadLines()}
                            />
                        }/>
                        
                );
                
            }
            
        }
        
    }

    
   function mapStateToProps(state, props) {
        return {
            isFetching: state.homeReducer.isFetching,
            hasError: state.homeReducer.hasError,
            errorMsg: state.homeReducer.errorMsg,
            articles: state.homeReducer.articles
        }
    }
    /*
    const mapDispatchToProps = (dispatch) => {
        return { dispatch,test: bindActionCreators(a, dispatch) }
      }*/
    
      export default connect(mapStateToProps,  )(Home);
    //export default connect(mapStateToProps, mapDispatchToProps )(Home);
    