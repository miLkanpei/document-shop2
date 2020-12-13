import React, { useState, useEffect } from 'react';
// import Operate from './Operate'

const Operate = props => {
  return <li>{props.value}</li>;
}

const OperatorList = (props) => {

  const operationList = props.operationList;
  const operations = operationList.map(operator =>
    <Operate
      key = {operator.toString()}
      value = {operator}
    />
  );

  return(
    <ul>
      {operations}
    </ul>
  );
}

export default OperatorList;