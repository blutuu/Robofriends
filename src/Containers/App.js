import React, {useState, useEffect} from 'react';
import './App.css';
import CardList from '../Components/CardList';
import SearchBox from "../Components/SearchBox";
import Scroll from '../Components/Scroll';
import ErrorBoundary from '../Components/ErrorBoundary';

function App() {
  // constructor() {
  //   super();
  //   this.state = {
  //     robots: [],
  //     searchfield: ''
  //   }
  // }

  // componentDidMount() {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //   .then(response => response.json())
  //   .then(data => {
  //     this.setState({ robots: data })
  //   });
  // }

  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState('');
  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
      setRobots(data) 
    });
  }, []);


  const onSearchChange = (event) => {
    console.log(event.target.value);
    // this.setState({ searchfield: event.target.value});
    setSearchfield(event.target.value);
  }

  // render() {
    // const {robots, searchfield} = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    return !robots.length ?
    <h1>LOADING...</h1> :
    (
        <div className="App">
          <h1 className="f2">Robofriends</h1>
          <SearchBox searchChange={onSearchChange} />
          <Scroll>
            <ErrorBoundary>
              <CardList robots={filteredRobots}/>
            </ErrorBoundary>
          </Scroll>
        </div>
    );
  // }
}

export default App;
