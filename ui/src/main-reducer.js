import { combineReducers } from "redux";
import galleryReducer from './pages/gallery/gallery-reducer'; 
import uploadReducer from './pages/upload/upload-reducer'; 

const allReducers = combineReducers({
    galleryReducer,
    uploadReducer
});
const rootReducer = (state, action)=>{
    return allReducers(state,action)
}

export default rootReducer;
