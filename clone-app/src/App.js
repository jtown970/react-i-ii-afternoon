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
      page: 1
    }
    this.handlePageCount = this.handlePageCount.bind(this)
  }

  componentDidMount(){
    this.setState({
      person: data
    })
  }

  handlePageCount(){
    this.setState({
      page: this.state.page + 1
    })
  }

  


  render(){

    const person = this.state.person.map(elem => {
        return <Display key={elem.id} ppl={elem}/>
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
