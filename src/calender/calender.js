import React from 'react';
import moment from 'moment'
import "./bootstrap.css"
import { thisExpression } from '@babel/types';


export default class Calender extends React.Component {
	
   
	weekdayshort = moment.weekdaysShort();
	state={
		dateObject:moment()
	}
	firstDayOfMonth = () => {
    let dateObject = this.state.dateObject;
    let firstDay = moment(dateObject)
                 .startOf("month")
                 .format("d"); 
   	return firstDay;
	};
	daysInMonth = () =>
	{
		return this.state.dateObject.daysInMonth();
	};
	currentDay = () => {  
		return this.state.dateObject.format("D");
	   };
	currentMonth = () => {  
		return this.state.dateObject.format("MMMM");
		this.state.dateObject.format("W");
		

	};
	nextMonth = () =>
	{

	};
	prevmonth = () =>
	{

	};
	date = () =>
	{
		console.log("wewqewqeq");
	}
	render()
	{
		let weekdayshortname = this.weekdayshort.map(day => {
				  return <th className="bg-week" key={day}><p className="text-white m-0">{day}</p></th>;
			});
    	let blank=[]
    	for(var i =0;i<this.firstDayOfMonth();i++)
    	{
    		blank.push(<td >{" "}</td>)
    	}
      
    	let daysInMonth = [];
		for (let d = 1; d <= this.daysInMonth(); d++) 
		{
			if(d==this.currentDay())
			{
				daysInMonth.push(<td className="bg-dark" key={d} >{d}</td> )
			}
			else{
			daysInMonth.push(<td className={this.props.bg} onClick={this.props.fun} id={d}>{d}</td> );
			}
		}	  
		  	var total=[...blank,...daysInMonth];
		  	let rows=[];
		  	let coloums=[];
			let temp=[];
			var i 
		  	for(i=0;i<total.length;i++)
		  	{
			   if(i!=0 && i%7==0)
			  	{
					rows.push(<tr>{temp}</tr>);
					temp=[];
					temp.push(total[i]);
			  	}
				  else
				{
					temp.push(total[i]);
			  	}

			  }
			  
			  rows.push(temp)

    	
		
		return(
			<div className="text-center">
				<div className=" bg-info m-0 ">
				<div className="float-left">
				<button className="btn btn-info " onClick={this.nextMonth}>Next</button>
				</div>
				
				<span className="month">	{this.currentMonth()}</span>
				
				<div className="float-right">
				<button className=" btn btn-info " onClick={this.prevmonth}>Prev</button>
				</div>
				</div>	
				<table className="table">
				<tr className="bg-dark">{weekdayshortname}</tr>
				{rows}
			 	</table>
				
			</div>
			);
		
  		
	}
}


