
//Configuration du Redux Store

import {createStore,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import reducers from '../redux/rootReducer' //Import du root Reducer

const enhancer =compose(applyMiddleware(thunk));

export default createStore (reducers,enhancer);



