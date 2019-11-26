
/*import {combineReducers} from 'redux'
import {connectRouter} from 'connected-react-router'
import reducer from '../modules/home/reducer'


const rootReducer=combineReducers({ });

export default rootReducer;
*/

import { combineReducers } from 'redux';

import newsReducer from "../reducer"

// Combine all the reducers
const rootReducer = combineReducers({ newsReducer });

export default rootReducer;
