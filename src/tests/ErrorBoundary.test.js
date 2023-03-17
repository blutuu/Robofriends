import React from "react";
import { shallow, mount } from "enzyme";
import ErrorBoundary from "../Components/ErrorBoundary";
import CardList from "../Components/CardList";

let wrapper = shallow(<ErrorBoundary />);
let wrapper2 = mount(
  <ErrorBoundary>
    <CardList />
  </ErrorBoundary>
);

describe("ErrorBoundary component testing", () => {
  it("renders the ErrorBoundary component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("renders the error message correctly", () => {
    // expect(wrapper.setState({ hasError: true })).toMatchSnapshot();
    expect(wrapper2).toMatchSnapshot();
  });
});
