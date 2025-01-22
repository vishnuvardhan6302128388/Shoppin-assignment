// src/App.js

import React, { useState } from 'react';
import Select from 'react-select';
import "./App.css"

// Sample data for Column 1 (Single select dropdown)
const column1Options = [
  { value: 'Option 1', label: 'Option 1' },
  { value: 'Option 2', label: 'Option 2' },
  { value: 'Option 3', label: 'Option 3' },
  { value: 'Option 4', label: 'Option 4' },
];

// Sample data for Column 2 (Multi select dropdown)
const initialColumn2Options = [
  { value: 'Item 1', label: 'Item 1' },
  { value: 'Item 2', label: 'Item 2' },
  { value: 'Item 3', label: 'Item 3' },
  { value: 'Item 4', label: 'Item 4' },
];

const App = () => {
  const [rows, setRows] = useState([{ column1: null, column2: [] }]);
  const [newItem, setNewItem] = useState('');
  const [column2Options, setColumn2Options] = useState(initialColumn2Options);

  // Function to handle the addition of a new row
  const addRow = () => {
    setRows([...rows, { column1: null, column2: [] }]);
  };

  // Function to handle change in the single select (Column 1)
  const handleColumn1Change = (selectedOption, rowIndex) => {
    const updatedRows = [...rows];
    updatedRows[rowIndex].column1 = selectedOption ? selectedOption.value : null;
    setRows(updatedRows);
  };

  // Function to handle change in the multi select (Column 2)
  const handleColumn2Change = (selectedOptions, rowIndex) => {
    const updatedRows = [...rows];
    updatedRows[rowIndex].column2 = selectedOptions ? selectedOptions.map((opt) => opt.value) : [];
    setRows(updatedRows);
  };

  // Function to add a new item to Column 2 options
  const handleAddNewItem = () => {
    if (newItem.trim() !== '') {
      setColumn2Options([
        ...column2Options,
        { value: newItem, label: newItem },
      ]);
      setNewItem(''); // Clear input after adding
    }
  };

  return (
    <div className="app">
      <h1 className='heading'>Dynamic <span className='spanEl'>Table with </span><span className='spanEl2'>Dropdowns</span></h1>
      <div className="table">
        {rows.map((row, rowIndex) => (
          <div className="table-row" key={rowIndex}>
            {/* Column 1 - Single Select */}
            <div className="column">
                <h1>Label 1</h1>
                <hr className='hr-line2'/>
              <Select
                options={column1Options.filter(
                  (option) => !rows.some((r) => r.column1 === option.value && r !== row)
                )}
                value={column1Options.find((opt) => opt.value === row.column1) || null}
                onChange={(selectedOption) => handleColumn1Change(selectedOption, rowIndex)}
                placeholder="Select an option"
              />
            </div>

            {/* Column 2 - Multi Select */}
            <div className="column2">
                <h1>Label 2</h1>
                <hr/>
              <Select
                isMulti
                options={column2Options}
                value={row.column2.map((item) => ({ value: item, label: item }))}
                onChange={(selectedOptions) => handleColumn2Change(selectedOptions, rowIndex)}
                placeholder="Select items"
              />
              {/* Add new item section at the end of the dropdown */}
              <hr/>
              <div className="add-new-item">
                <input
                  type="text"
                  value={newItem}
                  onChange={(e) => setNewItem(e.target.value)}
                  placeholder="Add new item"
                  className='inputEl'
                />
                <button onClick={handleAddNewItem}>Add</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add new row button */}
      <button onClick={addRow} className="add-row-btn">
        Add New Row
      </button>
    </div>
  );
};

export default App;
