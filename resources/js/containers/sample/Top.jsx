import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Operator from '../../components/sample/Operator'
import InputSample from '../../components/sample/InputSample'
import BMICounter from '../../components/sample/BMICounter'
import Customer from '../../components/sample/Customer'

class Top extends React.Component {

  constructor(props){
	super(props);
	this.state = {
	  person_count: 0,
	  point:1000,
	  operatorList: ['五島', '本村', '竹下', '徳永'],
	  weight: 68,
	  height: 1.75,
	};
	this.handleChange = this.handleChange.bind(this);
	this.handleBMIchange = this.handleBMIchange.bind(this);
  }

  componentDidMount(){
	console.log("mountされたよ");
  }

  componentWillMount(){
	console.log("もう一回mountされたよ");
  }

  handleChange(event){
	this.setState({
	  point: event.target.value
	});
  }

  handleBMIchange(event){
	console.log(event);
	const name = event.target.name
	const value = event.target.value
	this.setState({
	  [name]: value,
	})
  }

  render(){

	return(
	  <div>
			<Operator
				person_count = {this.state.person_count}
				point = {this.state.point}
				operatorList = {this.state.operatorList}
			/>
			<InputSample
				point = {this.state.point}
				handleChange = {this.handleChange}
			/>
			<BMICounter
				weight = {this.state.weight}
				height = {this.state.height}
				handleBMIchange = {this.handleBMIchange}
			/>
			<Customer/>
	  </div>
	);
  }

}

export default Top;