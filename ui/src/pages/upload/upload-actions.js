import * as CONST from '../../const';
import axios from 'axios';

export const uploadImg = (data) => {
    return function (dispatch) {
        axios({
            method: 'post',
            url: '/api/image',
            data
        }).then((res)=>{
            dispatch({
                type: CONST.UPLOAD_IMAGES_SUCCESS
            });
            
        }).catch(err=>{
            dispatch({
                type: CONST.UPLOAD_IMAGES_FAILURE,
                data:{msg: err.response.data.errorMsg} 
            });
        });
        setTimeout(() => {
            
        }, 2000)
    };
}

