import React, {Component} from 'react';
import './App.css';
import CardList from '../Components/CardList';
import SearchBox from "../Components/SearchBox";
import Scroll from '../Components/Scroll';
import ErrorBoundary from '../Components/ErrorBoundary';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
      this.setState({ robots: data })
    });
  }

  onSearchChange = (event) => {
    console.log(event.target.value);
    this.setState({ searchfield: event.target.value});
  }

  render() {
    const {robots, searchfield} = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    return (
        <div className="App">
          <h1 className="f2">Robofriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <ErrorBoundary>
              <CardList robots={filteredRobots}/>
            </ErrorBoundary>
          </Scroll>
        </div>
    );
  }
}

export default App;
