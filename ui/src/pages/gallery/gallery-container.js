import Gallery from "./gallery-component";

import {connect} from 'react-redux';
import * as acctions from './gallery-actions';

const mapStateToProps = (state, currentProps)=>{
    const images = state.galleryReducer.images;
    const failureMsg = state.galleryReducer.failureMsg;
    return {
        images, failureMsg
    }
}

export default connect(mapStateToProps, acctions)(Gallery);
