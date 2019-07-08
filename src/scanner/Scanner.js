import React, { Component } from 'react';
import { ScanFlags } from './ScanFlags';
import { ScanTypes } from './ScanTypes';

export class Scanner extends Component {
  constructor(props) {
    super(props);
    this.api = 'http://localhost:3500';
  
    this.state = {
      data: null,
      err: null,
      isLoading: false
    };

    this.onScanTypeChange = this.onScanTypeChange.bind(this);
    this.onScanFlagChange = this.onScanFlagChange.bind(this);
  }

  onScanTypeChange(command) {
    console.log(command);
  }

  onScanFlagChange(flag) {
    console.log(flag);
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    // this.fetchData();
  }

  fetchData() {
    fetch(`${this.api}/scan`)
      .then(response => response.json())
      .then(data => {
        this.setState({ data, isLoading: false })
        console.log(this.state.data);
      })
      .catch(err => this.setState({ err, isLoading: false }))
  }

  render() {
    const { isLoading, data } = this.state;

    return (
      <div>
        <ScanTypes onHandleChange={this.onScanTypeChange} />
        <ScanFlags onHandleChange={this.onScanFlagChange} />

        { isLoading ?
          <div>Loading data...</div> :
          <div>loaded { JSON.stringify(data) }</div>
        }
      </div>
    )
  }
}
