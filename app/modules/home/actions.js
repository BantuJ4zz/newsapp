import axios from 'axios'
import * as const_ from '../home/constants'
//import { actions } from './
const country='us';

export function getnewsHeadLines(){

    return (dispatch) =>{
       dispatch({type:const_.RETRIEVING_HEADLINES});
        
        return new Promise((resolve,reject) => {
            const url=`${const_.API_URL}country=${country}&apiKey=${const_.API_KEY}&pageSize=20`;
            axios.get(url)
            .then(res=>{
                const dataSource=res.data;
                this.setState({dataSource});
            console.log(res.data)           
            })
            .then((dataSource)=>{
                dispatch({type:const_.HEADLINES_AVAILABLE,data})
                resolve()
            })
            /*
            axios.get(url)
            //axios.get("https://jsonplaceholder.typicode.com/users")
                //.then(res =>console.log(res.data))
                .then((data)=> {
                    //dispatch({type:const_.HEADLINES_AVAILABLE,data})
                    //console.log(data.data);
                    resolve()
                })
                .catch(error =>{
                    //dispatch({type:const_.HEADLINES_ERROR,error})
                    console.error(error);
                    reject()

                });
                */
        }) 
    };
    
}


export default function getHeadLineBySource(source){
    return (dispatch)=>{
        dispatch({type:const_.RETRIEVING_HEADLINES});
        return new Promise((resolve,reject)=>{
            const url=`${const_.API_URL}source=${source}&apikey=${const_.API_KEY}&pageSize=20`;
            axios.get(url)
                .then(res=>res.data)
                .then((data)=>resolve(data))
                .catch(error =>reject(error));
                
        });
        
    }
    
} 

//export default actions;