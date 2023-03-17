import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import { shallow, mount, render } from "enzyme";
import configureStore from "redux-mock-store";
import App from "../../Containers/App";

const mockStore = configureStore([]);

describe("My connected component", () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      searchField: "",
      robots: [],
      isPending: false,
      error: "",
    });

    component = renderer.create(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });

  it("should render with given state from Redux store", () => {});

  it("should dispatch an action on button click", () => {});
});
