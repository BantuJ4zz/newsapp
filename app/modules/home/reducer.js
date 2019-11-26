import * as const_ from '../home/constants'
import { actions as action } from '../home/actions';

let initialStatus={isFetching:true, articles:[],hasError:false,errorMsg:""};

const homeReducer=(state=initialStatus,action)=>{
    switch (action.type){
        case const_.RETRIEVING_HEADLINES:{
            let isFetching=(state.articles.length>0)? false:true;
            return{...state,isFetching,hasError:false};
            console.log({articles})
        }
        case const_.HEADLINES_AVAILABLE:{
            let {articles}=action.data;
            return{... state,isFetching:false,hasError:false};
            console.log({articles})
        }
        case const_.HEADLINES_ERROR:{
            let {articles}=action.error;
            return{...state,isFetching:false,hasError:true,errorMsg:error}
            console.error()
        }
        default:
            return state;
    }

}

export default homeReducer;