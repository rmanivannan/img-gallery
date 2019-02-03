import React from 'react';
import ReactDOM from 'react-dom';
import { shallow,configure,mount, render } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

import Component from '../common/header';
import configureMockStore from "redux-mock-store";

configure({ adapter: new Adapter() });

describe("<Header />", () => {
  it("should render without throwing an error", () => {
    const elm = shallow(
      <Component />
    );
    expect(elm.find('nav').length).toEqual(1);
    expect(elm.find('li').length).toEqual(3);
    expect(elm.find('li').length).toEqual(3);
    expect(elm.find('Link').length).toEqual(3);
  });
});
