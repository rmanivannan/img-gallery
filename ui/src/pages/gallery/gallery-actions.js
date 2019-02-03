import * as CONST from '../../const';
import axios from 'axios';

export const getImage = () => {
    return function (dispatch) {
        axios({
            method: 'get',
            url: '/api/images'
        }).then((res)=>{
            dispatch({
                type: CONST.GET_IMAGES_SUCCESS,
                data: {
                    images: res.data.images
                }
            });
        }).catch(err=>{
            dispatch({
                type: CONST.GET_IMAGES_FAILURE
            })
        });
    };
}

