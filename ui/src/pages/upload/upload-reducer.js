
import * as CONST from '../../const';
const initialState = {
    msg: ''
}
const formatImages = () => {
    return {};
}
const uploadReducer = (state = { ...initialState }, action) => {
    switch (action &&action.type) {
        case CONST.UPLOAD_IMAGES_SUCCESS:
            return {
                ...state,
                msg:'Image Uploaded'
            };
        case CONST.UPLOAD_IMAGES_FAILURE:
            return {
                ...state,
                msg:action.data.msg || 'Image Upload Failed'
            };
        default: return state;
    }
}
export default uploadReducer;
