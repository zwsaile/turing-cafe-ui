import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
    super()
    this.state = {
      name: "",
      date: "",
      time: "",
      number: 0
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  submitReservation = event => {
    event.preventDefault()
    const newRes = {
      id: Date.now(),
      ...this.state
    }
    this.props.createReservation(newRes)
    this.clearInputs()
  }

  clearInputs = () => {
    this.setState({ name: "", date: "", time: "", number: 0})
  }

  render() {
    return (
      <form className="res-form">
        <input
          className='form-name'
          type='text'
          placeholder='Your Name'
          name='name'
          value={this.state.name}
          onChange={event => this.handleChange(event)}
        />
        <input
        className='form-date'
          type='text'
          placeholder='Date'
          name='date'
          value={this.state.date}
          onChange={event => this.handleChange(event)}
        />
        <input
        className='form-time'
            type='text'
            placeholder='Time'
            name='time'
            value={this.state.time}
            onChange={event => this.handleChange(event)}
          />
          <input
            className='form-num'
            type='number'
            placeholder='Number of guests'
            name='number'
            value={this.state.number}
            onChange={event => this.handleChange(event)}
          />
          <button onClick={event => this.submitReservation(event)} className='form-submit'>Make Reservation</button>
      </form>
    )
  }
}

export default Form
