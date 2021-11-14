import React from 'react';
import BarChart from '../charts/BarChart';
import get from 'lodash/get';



export default function CourseWiseColleges(props) {

   const [colleges, setColleges] = React.useState([]);

   React.useEffect( () => {
    setColleges(props.colleges);
   },[props.colleges])
   
  console.log(props);
  let collegesByStatePercentage = [];
  let totalColleges = colleges.length; 
  const collegesByState = colleges.reduce(function(agg, college) {
       college.courses.reduce( (agg2,course) => {
        if(agg2[course]) {
          agg2[course] = ++agg2[course]
        } else {
          agg2[course] = 1;
        }
        return agg2
       }, agg)
       return agg;
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
    let course = '';
    params && params.forEach( param => {
      course = get(param, 'data.type');
        console.log(course);
    });
    if(course) {
        const plotData = props.colleges.filter(college => college.courses.includes(course));
        console.log('plotData is ',plotData);
        
        let colleges = plotData.reduce((clgs,curr) => clgs += curr.name +';' ,[]);
        console.log('colleges are ',colleges);
        let students = await fetch('/students?colleges='+colleges).then(res => res.json()).then( data => data);
        console.log('students are ',students,plotData);
        let type = {
          name : 'course',
          value : course
      }
        props.showSelectedPlotData(plotData,students,type);
    }
  }

  return (
    <BarChart 
     data={collegesByStatePercentage}
     name="Colleges by course"
     handleSelectedArea={handleSelectedArea}
   />
  )
}