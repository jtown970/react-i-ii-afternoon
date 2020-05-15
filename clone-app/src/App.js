import React, { Component } from 'react';
import './App.css';
import data from './data'
import Nav from './components/Nav'
import Display from './components/Display'


class  App extends Component {
  constructor(){
    super()

    this.state = {
      person: [],
    }
    
  }

  componentDidMount(){
    this.setState({
      person: data
    })
  }
  


  render(){
    const person = this.state.person.map(elem => {
      
        return <Display ppl={elem}/>
      
    })
    return (
      <div>
                <div className='header'>
        <div className='home-text'>Home</div>
        </div>
        {person}
        <Nav/>
      </div>
    );
  }
}
export default App
