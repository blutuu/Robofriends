import React from "react";
import { shallow } from "enzyme";
import CounterButton from "../CounterButton";

const setState = jest.fn();
const useStateSpy = jest.spyOn(React, "useState");
useStateSpy.mockImplementation((initialState) => [initialState, setState]);
const wrapper = shallow(<CounterButton />);

describe("<CounterButton />", () => {
  it("expect to render CounterButton component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("expect state update on button click", () => {
    wrapper.find("#count-button").simulate("click");
    expect(setState).toHaveBeenCalledWith(1);
  });
});
