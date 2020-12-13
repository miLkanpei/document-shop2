import React from 'react';

const BMIInput = (props) => {
  return(
    <form>
      <input type="text" value={props.weight} name="weight" onChange={props.handleBMIchange} />
      <input type="text" value={props.height} name="height" onChange={props.handleBMIchange} />
    </form>
  )
}

const Result = (props) => {

  const weight = props.weight;
  const height = props.height;
  const BMI = weight / height / height;

  return(
    <div>
      <h2>あなたの体重は{weight}kg</h2>
      <h2>あなたの身長は{height}m</h2>
      <h2>あなたのBMIは{BMI}</h2>
    </div>
  )
}

const BMICounter = (props) => {

  return(
    <div>
      <BMIInput
        weight = {props.weight}
        height = {props.height}
        handleBMIchange = {props.handleBMIchange}
      />
      <Result
        weight = {props.weight}
        height = {props.height}
      />
    </div>
  )

}

export default BMICounter;