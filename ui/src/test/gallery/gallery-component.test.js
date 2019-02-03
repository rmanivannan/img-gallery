import React from 'react';
import ReactDOM from 'react-dom';
import { shallow,configure,mount, render } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

import Component from '../../pages/gallery/gallery-component';
import configureMockStore from "redux-mock-store";

configure({ adapter: new Adapter() });

describe("<Header />", () => {
  it("should render without throwing an error", () => {
    const imgList = [1,2,3];
    const elm = render(
      <Component failureMsg="mmmmm" images={[1,2,3]}/>
    );

    expect(elm.find('p').length).toEqual(1);
    expect(elm.find('img').length).toEqual(imgList.length);
    expect(elm.find('img#img-0').attr('src')).toEqual(imgList[0].toString());
    expect(elm.find('img#img-1').attr('src')).toEqual(imgList[1].toString());
    expect(elm.find('p').text()).toEqual('mmmmm');
    expect(elm.find('h1').text()).toEqual('Gallery');
  });

  it("should render without throwing an error even if no props passed", () => {
    const imgList = [1,2,3];
    let isGetImageCalled = false;
    const elm = render(
      <Component />
    );

    expect(elm.find('p').length).toEqual(1);
    expect(elm.find('p').text()).toEqual('');
    expect(elm.find('img').length).toEqual(0);
  });
});
