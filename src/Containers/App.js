import React, {useState, useEffect, Component} from 'react';
import { connect } from 'react-redux'; 
import './App.css';
import CardList from '../Components/CardList';
import SearchBox from "../Components/SearchBox";
import Scroll from '../Components/Scroll';
import ErrorBoundary from '../Components/ErrorBoundary';
import { setSearchField, requestRobots } from '../Redux/actions';


const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => requestRobots(dispatch)
  }
}

class App extends Component {
  

  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    // const { robots } = this.state;
    const { searchField, onSearchChange, robots, isPending, error } = this.props;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return isPending ?
    <h1>LOADING...</h1> :
    (
        <div className="App">
          <h1 className="f2">Robofriends</h1>
          <SearchBox searchChange={ onSearchChange } />
          <Scroll>
            <ErrorBoundary>
              <CardList robots={ filteredRobots }/>
            </ErrorBoundary>
          </Scroll>
        </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
