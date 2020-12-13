import React from 'react';

const InputSample = (props) => {

  const handleSubmit = (event) => {
    alert("送信するよ");
    event.preventDefault();
  }

  return(
    <form onSubmit={handleSubmit}>
      <label htmlFor=""></label>
      <input type="text" value={props.point} onChange={props.handleChange}/>
      <input type="submit"/>
    </form>
  )
}

export default InputSample;