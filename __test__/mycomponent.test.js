// MyComponent.test.js
import React from 'react';
import { shallow } from 'enzyme';
import MyComponent from '../mycomponent';
describe("MyComponent", () => {
  test("should render my component", () => {
    const wrapper = shallow(<MyComponent />);
  });
});