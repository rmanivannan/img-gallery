import Upload from "./upload-component";


import {connect} from 'react-redux';
import * as acctions from './upload-actions';

const mapStateToProps = (state, currentProps)=>{
    const msg = state.uploadReducer.msg;
    return {
        msg
    }
}

export default connect(mapStateToProps, acctions)(Upload);

