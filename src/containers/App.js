import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';
import Cardlist from '../components/Cardlist'
import Scroll from '../components/Scroll'

import SearchBox from '../components/SearchBox'
// import {robots} from '../components/robots'
import './App.css'


  class App extends Component {
    constructor(){
      super()
      this.state={
        robots: [],
        searchfield: '',
      } 
    }

    onSearchChange=(event)=>{
        this.setState({searchfield: event.target.value })
    }
    componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=>response.json())
      .then(users=>this.setState({robots:users}))
    // this.setState({robots:robots})
    }
    

    render(){
      const {robots,searchfield}=this.state;
      const filteredarray=robots.filter(robot=>{
        return robot.name.toLowerCase().includes(searchfield.toLowerCase())
      }
      )
      return !robots.length?
      <h1>loading</h1>:
      (
        <div className='tc'>
        <h1 className='h1 f1'>The robots</h1>
        <div className=''>
          <SearchBox searchChange={this.onSearchChange}/>
        </div>
        <hr className='line'/>
        <Scroll>
          <Cardlist robots={filteredarray}/>  
        </Scroll>
        
      </div>
      )
    }
  }

  export default App