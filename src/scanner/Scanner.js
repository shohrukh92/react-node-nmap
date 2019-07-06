import React, { Component } from 'react';

export class Scanner extends Component {
  constructor(props) {
    super(props);
    this.api = 'http://localhost:3500/';
  
    this.state = {
      data: null,
      err: null,
      isLoading: false
    };
  }

  compo

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch(`${this.api}scan`)
      .then(response => response.json())
      .then(data => {
        this.setState({ data, isLoading: false })
        console.log(this.state.data);
      })
      .catch(err => this.setState({ err, isLoading: false }))
  }

  render() {
    const { isLoading, data, err } = this.state;

    return (
      <div>
        { isLoading ?
          <div>Loading data...</div> :
          <div>loaded { JSON.stringify(data) }</div>
        }
      </div>
    )
  }
}
