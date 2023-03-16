import React from "react";
import { shallow } from "enzyme";
import MainPage from "../../Components/MainPage";

let wrapper;

beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    searchField: "",
    onSearchChange: jest.fn(),
    robots: [],
    isPending: false,
  };

  wrapper = shallow(<MainPage {...mockProps} />);
});

describe("Testing main page component", () => {
  it("renders MainPage without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("filters robots correctly", () => {
    const mockProps2 = {
      onRequestRobots: jest.fn(),
      searchField: "a",
      onSearchChange: jest.fn(),
      robots: [
        {
          id: 3,
          name: "John",
          email: "john@gmail.com",
        },
      ],
      isPending: false,
    };

    const filteredRobots = [];
    const wrapper2 = shallow(<MainPage {...mockProps2} />);
    expect(wrapper2.instance().filteredRobots()).toEqual(filteredRobots);
  });

  it("filters robots correctly 2", () => {
    const mockProps3 = {
      onRequestRobots: jest.fn(),
      searchField: "j",
      onSearchChange: jest.fn(),
      robots: [
        {
          id: 3,
          name: "John",
          email: "john@gmail.com",
        },
      ],
      isPending: false,
    };

    const filteredRobots2 = [
      {
        id: 3,
        name: "John",
        email: "john@gmail.com",
      },
    ];
    const wrapper3 = shallow(<MainPage {...mockProps3} />);
    expect(wrapper3.instance().filteredRobots()).toEqual(filteredRobots2);
  });

  it("tests the pending variable", () => {
    const mockProps4 = {
      onRequestRobots: jest.fn(),
      searchField: "",
      onSearchChange: jest.fn(),
      robots: [],
      isPending: true,
    };

    const wrapper4 = shallow(<MainPage {...mockProps4} />);
    expect(wrapper4).toMatchSnapshot();
  });
});
