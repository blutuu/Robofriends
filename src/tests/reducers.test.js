import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from "../Redux/constants";
import * as reducers from "../Redux/reducers";

describe("searchRobots", () => {
  const initialStateSearch = {
    searchField: "",
  };
  it("should return the initial state", () => {
    expect(reducers.searchRobots(undefined, {})).toEqual({
      searchField: "",
    });
  });

  it("should handle CHANGE_SEARCH_FIELD", () => {
    expect(
      reducers.searchRobots(initialStateSearch, {
        type: CHANGE_SEARCH_FIELD,
        payload: "abc",
      })
    ).toEqual({
      searchField: "abc",
    });
  });
});

describe("requestRobots", () => {
  const initialStateRobots = {
    isPending: false,
    robots: [],
    error: "",
  };

  it("should return the initial state", () => {
    expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots);
  });

  it("should return the pending state", () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_PENDING,
      })
    ).toEqual({
      ...initialStateRobots,
      isPending: true,
    });
  });

  it("should return the success state", () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_SUCCESS,
        payload: [
          {
            id: 3,
            name: "John",
            email: "john@gmail.com",
          },
        ],
      })
    ).toEqual({
      ...initialStateRobots,
      robots: [
        {
          id: 3,
          name: "John",
          email: "john@gmail.com",
        },
      ],
    });
  });

  it("should return the failure state", () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_FAILED,
        payload: "error message",
      })
    ).toEqual({
      ...initialStateRobots,
      error: "error message",
    });
  });
});
