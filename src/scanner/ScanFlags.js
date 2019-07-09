import React from 'react';
import { FlagCheckbox } from './FlagCheckbox';

export class ScanFlags extends React.Component {
  constructor(props) {
    super(props);

    const defaultScanFlags = ScanFlags.SCAN_FLAGS
      .map(flag => flag.name)
      .reduce((acc, flagName) => {
        acc[flagName] = false;
        return acc;
      }, {});

    this.state = defaultScanFlags;
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange({ target }) {
    const { name, type } = target;
    const value = (type === 'checkbox') ? target.checked : target.value;

    this.setState({
      [name]: value
    });

    this.emitChanges({
      ...this.state,
      [name]: value
    })
  }

  emitChanges(flags) {
    const selectedFlags = ScanFlags.SCAN_FLAGS
      .filter(item => flags[item.name])
      .map(item => item.flag)
      .join(' ');

    this.props.onHandleChange(selectedFlags);
  }

  render() {
    const { state } = this;
    
    return (
      <section>
        {ScanFlags.SCAN_FLAGS.map(flag =>
          <FlagCheckbox
            key={flag.name}
            checked={state[flag.name]}
            handleInputChange={this.handleInputChange}
            {...flag}
          />
        )}
      </section>
    )
  }
}

ScanFlags.SCAN_FLAGS = [
  {
    flag: '-F',
    label: 'Быстрое сканирование - Сканирование ограниченного количества портов',
    name: 'fastScan'
  },
  {
    flag: '-sP',
    label: 'Пинг сканирование - просто определить, работает ли хост',
    name: 'pingScan'
  },
  {
    flag: '-O',
    label: 'Активировать функцию определения ОС',
    name: 'osDetecting'
  }
];
