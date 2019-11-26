import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import {AppLoading} from 'expo'
import {
    Router,
    Scene,
    Stack
} from 'react-native-router-flux'
import Home from '../modules/home/scenes/Home';
import Article from '../modules/home/scenes/Article';
import Source from '../modules/home/scenes/Source';
import { 
    color, 
    navTitleStyle 
} from "../styles/uiModule";

export default class extends React.Component {
    render() {
        return (
            <Router>
                <Stack key="root"
                       navigationBarStyle={{backgroundColor: "#fff"}}
                       titleStyle={navTitleStyle}
                       backButtonTintColor={color.black}>
                    <Scene key="Home" component={Home} title="News App" initial/>
                    <Scene key="Article" component={Article} title=""/>
                    <Scene key="Source" component={Source} title=""/>
                </Stack>
            </Router>
        )
    }
}

/*
export default class routes extends React.Component{
    state={
        isReady:false
    };

    componentDidMount(){
        setTimeout(()=> this.setState({isReady:true}),1000)
    }

    render(){
        let navTitleStyle={fontSize:15,fontFamily:'HelveticanNeue-Medium',
        color:'#1E1611',letterSpacing:0.4}

        if (!this.state.isReady)
        return <AppLoading/>

        return(

            <router>
                <Stack key="root" navigationBarStyle={{backgroundColor:'#fff'}} titleStyle={navTitleStyle}
                backButtonTintColor={'#1E1611'}>
                    <Scene key="Main" component={Main} title="main" initial/>
                </Stack>
            </router>
        );
    }

}

class Main extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>Open up App.js to start working on your app!</Text>
                <Text>Changes you make will automatically reload.</Text>
                <Text>Shake your phone to open the developer menu.</Text>
            </View>

        );
    }
}
*/

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',
    },
});
