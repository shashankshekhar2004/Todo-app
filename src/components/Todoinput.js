import React, { useState } from 'react';

function Todoinput(props) {
  const [inputText, setInputText] = useState(""); 

  const handleEnterPress = (e) => {
    if (e.keyCode === 13) {
      props.addList(inputText);
      setInputText("");
    }
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleAddButtonClick = () => {
    props.addList(inputText);
    setInputText("");
  };

  return (
    <div className='input-container'>
      <input
        type='text'
        className='input-box-todo'
        placeholder='Enter your todo'
        value={inputText}
        onChange={handleInputChange}
        onKeyDown={handleEnterPress} 
        style={{ width: "350px", height: "30px", borderRadius:"40px",backgroundColor:"yellow"}}
      />
      <button className='add-btn' onClick={handleAddButtonClick} style={{color:"white",height:"35px",backgroundColor:"purple",borderRadius:"15px"}}>Add</button>
    </div>
  );
}

export default Todoinput;
