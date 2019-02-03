import React from 'react';
import ReactDOM from 'react-dom';
import { shallow,configure,mount, render } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

import Component from '../../pages/upload/upload-component';
import configureMockStore from "redux-mock-store";

configure({ adapter: new Adapter() });

describe("<Header />", () => {
  it("should render without throwing an error", () => {
    const elm = render(
      <Component msg="Sample message" />
    );

    expect(elm.find('h1').text()).toEqual('Uplaod New Image');
    expect(elm.find('p').text()).toEqual('Sample message');
    expect(elm.find('input').length).toEqual(2);
  });

  it("should render without throwing an error even if no props passed", () => {
    const preventDefault = jest.fn();

    const elm = mount(
      <Component msg="Sample message" />
    );

    elm.find('#file').getDOMNode().value = "";
    elm.find('#uploadSubmitBtn').simulate('click');
    elm.find('#uploadSubmitBtn').simulate('click');
  });
});
