import React from 'react';
import { useState } from 'react';




const App = () => {
  const options = [
    { label: 'Nigeria', value: 'Newest'},
    { label: 'Ghana', value: 'Details'},
    { label: 'United Kingdom', value: 'Cancel' },
    { label: 'United State', value: 'Newest'},
    { label: 'India', value: 'Details'},
    { label: 'Poland', value: 'Cancel' },
    { label: 'Benin republic', value: 'Benin republic'},
    {label: 'Brazil', value: 'Brazil'},
    { label: 'Rwanda', value: 'Rwanda' },
  ];

  const [value, setValue] = React.useState('fruit');
  const [name, setName] = React.useState('country');
  const handleChange = (event) => {
    setValue(event.target.value);
    setName(event.target.name);
  };

  return (
    <div>
      <Dropdown3 
        
        label=""
        options={options}
        value={value}
        onChange={handleChange}
        name={name}
        
       
      />

    </div>
  );
};

const Dropdown3 = ({ label, value, options, onChange, name }) => {
  return (
    <label>
      {label}
      <select className="dropdown" value={value} onChange={onChange} name={name}  >
      {options.map((option) => (
        <option className="options" value={option.value}>{option.label}</option>
        ))}
      </select>
      <style jsx>{`
   .dropdown{
    background-color:#fff;
    width:73%;
    height: 5vh; 
    position:relative; 
    top:130px;
    left:80px;
    border: 2px solid rgb(189, 186, 186);
    border-radius: 5px;
    accent-color:#e83151;
    box-shadow: 0px 2px 2px rgb(189, 186, 186);
    font-weight:bold;
   }
      
      `}</style>
    </label>
  );
};

export default App;