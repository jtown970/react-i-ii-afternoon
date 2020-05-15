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
      page: data.id
    }
  }

  componentDidMount(){
    this.setState({
      person: data
    })
  }

  nextPage = () => {
    const newIndex = this.state.person.id+1
    this.setState({
      page: data.id
    })
  }

  prevPage = () => {
    const newIndex = this.state.person.id-1
    this.setState({
      page: data.id
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
        <button onClick={() => this.prevPage()} disabled={data.id === 1} >Prev</button>
        <button onClick={() => this.nextPage()} disabled={data.length-1} >Next</button>
      </div>
    );
  }
}
export default App
