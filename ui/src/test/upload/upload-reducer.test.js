import * as CONST from '../../const';
import Reducer from '../../pages/upload/upload-reducer';

const initialState = {
  msg: ''
}
describe("Upload Reducer", () => {
  it("should return valid initial state", () => {
    expect(Reducer()).toEqual(initialState);
  });

  it("should CONST.UPLOAD_IMAGES_SUCCESS return right data", () => {
    let state1 = Reducer();
    expect(Reducer(state1,{
      type: CONST.UPLOAD_IMAGES_SUCCESS,
      data:{}
    })).toEqual({
      msg: 'Image Uploaded'
    });
  });

  it("should CONST.UPLOAD_IMAGES_FAILURE return right data for unhandled error object", () => {
    let state1 = Reducer();
    expect(Reducer(state1,{
      type: CONST.UPLOAD_IMAGES_FAILURE,
      data:{}
    })).toEqual({
      msg: 'Image Upload Failed'
    });
  });

  it("should CONST.UPLOAD_IMAGES_FAILURE return right data", () => {
    let state1 = Reducer();
    expect(Reducer(state1,{
      type: CONST.UPLOAD_IMAGES_FAILURE,
      data:{msg:'Server error'}
    })).toEqual({
      msg: 'Server error'
    });
  });

});
