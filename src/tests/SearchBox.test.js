import React from "react";
import { shallow } from "enzyme";
import SearchBox from "../Components/SearchBox";

let wrapper;

describe("SearchBox component testing", () => {
  it("renders SearchBox correctly", () => {
    wrapper = shallow(<SearchBox searchChange="" />);
    expect(wrapper).toMatchSnapshot();
  });
});
