import React, {Component} from 'react';

import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super()
  
    this.state = {
       monsters:[],
       searchfield: ''
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(Response =>Response.json())
    .then(users => this.setState({monsters:users}))
  }
  render() {
    const {monsters,searchfield} =this.state;
    const filterMonsters = monsters.filter(
          monster =>monster.name.toLowerCase().includes(searchfield.toLowerCase()));
    return (
      <div className="App">
        <h1>Monsters List</h1>
        <SearchBox placeholder="search monster" 
                  handelChange={e=>this.setState({searchfield:e.target.value})}></SearchBox>
        <CardList monsters={filterMonsters} > 
        
        </CardList>
        
      </div>
    )
  }
}

export default App


/*function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
