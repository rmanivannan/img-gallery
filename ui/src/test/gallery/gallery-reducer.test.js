import * as CONST from '../../const';
import Reducer from '../../pages/gallery/gallery-reducer';

describe("Reducer Gallery", () => {
  it("should return valid initial state", () => {

    expect(Reducer()).toEqual({
      images: [],
      failureMsg: 'No Images found'
    });

  });

  it("should CONST.GET_IMAGES_SUCCESS return right data", () => {
    let state1 = Reducer();
    const data = {images:[1,2,3]}
    expect(Reducer(state1,{
      type: CONST.GET_IMAGES_SUCCESS,
      data
    })).toEqual({
      images: data.images,
      failureMsg: ''
    });
  });
  

  it("should CONST.GET_IMAGES_FAILURE return right data", () => {
    let state1 = Reducer();
    const initialState = {
      images: [],
      failureMsg: 'No Images found'
  }
    expect(Reducer(state1,{
      type: CONST.GET_IMAGES_FAILURE
    })).toEqual(initialState);
  });
});
