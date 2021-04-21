import React, { useState } from 'react';

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length >= 2) {
      setCategories((cat) => [inputValue, ...cat]);
      setInputValue('');
    }
  };
  return (
    <form onSubmit={handelSubmit}>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  );
};
