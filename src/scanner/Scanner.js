import React, { Component } from 'react';
import { ScanFlags } from './ScanFlags';
import { ScanTypes } from './ScanTypes';

export class Scanner extends Component {
  constructor(props) {
    super(props);
    this.api = 'http://localhost:3500';
    this.NMAP_PATH = 'nmap';
  
    this.state = {
      data: null,
      err: null,
      isLoading: false,
      scanTarget: '',
      scanFlags: '',
      finalCommand: this.NMAP_PATH
    };

    this.onScanTypeChange = this.onScanTypeChange.bind(this);
    this.onScanFlagChange = this.onScanFlagChange.bind(this);
    this.handleTargetChange = this.handleTargetChange.bind(this);
    this.handleCommandChange = this.handleCommandChange.bind(this);
    this.startScan = this.startScan.bind(this);
  }

  onScanTypeChange(flags) {
    this.updateFlags(flags);
  }

  onScanFlagChange(flags) {
    this.updateFlags(flags); 
  }

  updateFlags(flags) {
    const { scanTarget } = this.state;
    this.setState({
      scanFlags: flags,
      finalCommand: `${this.NMAP_PATH} ${flags} ${scanTarget}`
    });
  }

  handleTargetChange({ target: { value } }) {
    const { scanFlags } = this.state;
    this.setState({
      scanTarget: value,
      finalCommand: `${this.NMAP_PATH} ${scanFlags} ${value}`
    });
  }

  handleCommandChange({ target: { value } }) {
    console.log(value);
  }

  startScan(event) {
    event.preventDefault();
    this.setState({ isLoading: true });
    this.fetchData();
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
    const { isLoading, data, target, finalCommand } = this.state;

    return (
      <div>
        <form>
          <ScanTypes onHandleChange={this.onScanTypeChange} />
          <ScanFlags onHandleChange={this.onScanFlagChange} />
          <label>
            Цель сканирования:
            <input type="text" name="target"
              checked={target}
              onChange={this.handleTargetChange}
            />
          </label>
          <label>
            Команда сканирования:
            <input type="text" name="target"
              value={finalCommand}
              onChange={this.handleCommandChange}
            />
          </label>
          <button onClick={this.startScan}>Начать сканирование</button>
        </form>


        { isLoading ?
          <div>Loading data...</div> :
          <div>loaded { JSON.stringify(data) }</div>
        }
      </div>
    )
  }
}
