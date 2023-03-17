import React from "react";
import { shallow } from "enzyme";
import Scroll from "../Components/Scroll";

let wrapper = shallow(<Scroll />);

describe("Scroll component testing", () => {
  it("renders the Scroll component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
