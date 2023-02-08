import React from "react";
import { shallow, mount, render } from "enzyme";
import configureStore from "redux-mock-store";
import App from "../../Containers/App";

const mockStore = configureStore([]);

describe("My connected component", () => {
  it("expect to render App component", () => {
    expect(shallow(<App />)).toMatchSnapshot();
  });

  it("should render with given state from Redux store", () => {
    let store;

    beforeEach(() => {
      store = mockStore({
        myState: "sample text",
      });
    });
  });

  it("should dispatch an action on button click", () => {});
});
