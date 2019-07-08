import React from 'react';

export const FlagCheckbox = ({
  label = 'Check it',
  name = 'checkbox',
  checked = false,
  handleInputChange = f=>f
}) => {
  return (
    <label>
      {label}:
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={handleInputChange}
      />
      <br />
    </label>
  );
}
