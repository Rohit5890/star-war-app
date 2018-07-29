import { combineReducers } from "redux";
import displayReducer from './reducer.displayReducer.js';
import morePlanetReducer from './reducer.morePlanetReducer';

const rootReducer = combineReducers({
    searchList:displayReducer,
    morePlanetList: morePlanetReducer
})

export default rootReducer;