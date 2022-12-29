import React from 'react';
import { useState } from 'react';




const App = () => {
  const options = [
    { label: 'Toronto', value: 'Toronto'},
    { label: 'Calgary', value: 'Calgary'},
    { label: 'Edmonton', value: 'Edmonton' },
    { label: 'London', value: 'London'},
    { label: 'British Colombia', value: 'British  Colombia'},
    { label: 'Montreal', value: 'Montreal' },
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
    border: 1px solid black;
    border-radius: 4px;
    accent-color:#e83151;
    font-weight:100;
    outline:none;
    background-color: none;
   }
   
/* Media Queries */
@media only screen and (max-width: 600px){
     .dropdown{
      position: relative;
        width: 98%;
        height:16vh;
        border: 2px solid red;
        border-radius: 5px;
        left:-15rem;
        padding: 20px;
        font-size: 60px;
        top:30rem;
     }
}
      
      `}</style>
    </label>
  );
};

export default App;