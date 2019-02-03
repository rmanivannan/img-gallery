
import * as CONST from '../../const';
const initialState = {
    images: [],
    failureMsg: 'No Images found'
}
const formatImages = (data) => {
    return {
        images : data.images,
        failureMsg : ''
    };
}
const galleryReducer = (state = { ...initialState }, action) => {
    switch (action && action.type) {
        case CONST.GET_IMAGES_SUCCESS:
            return {
                ...state,
                ...formatImages(action.data)
            };
        case CONST.GET_IMAGES_FAILURE:
            return {
                ...initialState
            };
        default: return state;
    }
}
export default galleryReducer;
