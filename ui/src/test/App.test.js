import React from 'react';
import ReactDOM from 'react-dom';
import { shallow,configure,mount } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

import App from '../App';
import configureMockStore from "redux-mock-store";

configure({ adapter: new Adapter() });

describe("Root App component testing", () => {
  it("should render without throwing an error", () => {
    const app = shallow(
      <App />
    );
    expect(app.find('Header').length).toEqual(1);
  });
});
