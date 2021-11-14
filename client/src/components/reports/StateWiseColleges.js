import React from 'react';
import PieChart from '../charts/PieChart';
import get from 'lodash/get';


export default function StateWiseColleges(props) {

  console.log(props);
  let collegesByStatePercentage = [];
  let totalColleges = props.colleges.length; 

  const collegesByState = props.colleges.reduce(function(agg, college) {
    if(agg[college.state]) {
      agg[college.state] = ++agg[college.state]
    } else {
      agg[college.state] = 1;
    }
    return agg
  },{});

  console.log(collegesByState);

  for (let state in collegesByState) {
    if (collegesByState.hasOwnProperty(state)) {
      console.log(state,collegesByState[state]);
      let data = {
          type: state,
          value: Math.floor((collegesByState[state]/totalColleges)*100)
      }
      collegesByStatePercentage.push(data);
    }
  }

  console.log(collegesByStatePercentage);

  const handleSelectedArea = async (params) => {
    let collState = '';
    params && params.forEach( param => {
      collState = get(param, 'data.type');
        console.log(collState);
    });
    if(collState) {
      const plotData = props.colleges.filter(college => college.state === collState);
      console.log('plotData is ',plotData);


      let type = {
          name : 'state',
          value : collState
      }
      props.showSelectedPlotData(plotData,type);
     }
  }

  return (
    <PieChart 
     data={collegesByStatePercentage}
     name="Colleges by state"
     handleSelectedArea={handleSelectedArea}
   />
  )
}