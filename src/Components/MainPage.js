import React, { Component } from "react";
import "./MainPage.css";
import CardList from "../Components/CardList";
import SearchBox from "../Components/SearchBox";
import Scroll from "../Components/Scroll";
import ErrorBoundary from "../Components/ErrorBoundary";
import CounterButton from "../Components/CounterButton";

class MainPage extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  filteredRobots = () => {
    return this.props.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.props.searchField.toLowerCase());
    });
  };

  render() {
    const { onSearchChange, isPending } = this.props;

    return isPending ? (
      <h1>LOADING...</h1>
    ) : (
      <div className="App">
        <h1 className="f2">Robofriends</h1>
        <SearchBox searchChange={onSearchChange} />
        <CounterButton />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={this.filteredRobots()} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

export default MainPage;
