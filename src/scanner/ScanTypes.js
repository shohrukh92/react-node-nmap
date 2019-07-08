import React from 'react';

export class ScanTypes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0
    }

    this.handleChange = this.handleChange.bind(this);
  }

  
  handleChange({ target: { value } }) {
    this.setState({ value });
    const scanType = ScanTypes.SCAN_TYPES.find(type => type.value === Number(value));
    this.props.onHandleChange(scanType ? scanType.command : '');
  }

  render() {
    return (
      <label>
        Выберите тип сканирования:
        <select value={this.state.value} onChange={this.handleChange}>
          <option value="0"></option>
          {ScanTypes.SCAN_TYPES.map(type =>
            <option key={type.value} value={type.value}>{type.name}</option>
          )}
        </select>
      </label>
    )
  }
}

ScanTypes.SCAN_TYPES = [
  {
    value: 1,
    name: 'Интенсивное сканирование',
    command: 'nmap -T4 -A -v '
  },
  {
    value: 2,
    name: 'Интенсивное сканирование / UPD',
    command: 'nmap -sS -sU -T4 -A -v '
  },
  {
    value: 3,
    name: 'Интенсивное сканирование / все порты',
    command: 'nmap -p 1-65535 -T4 -A -v '
  },
  {
    value: 4,
    name: 'Пинг-сканирование',
    command: 'nmap -sn '
  },
  {
    value: 5,
    name: 'Быстрое сканирование',
    command: 'nmap -T4 -F '
  }
];
