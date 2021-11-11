import React from 'react';
import CollegeList from '../ui/CollegeList';
import Charts from './Charts';
import {Card} from 'antd';



export default function Dashboard(props) {
  const [plotData, setPlotData] = React.useState([]);
  const [students, setStudents] = React.useState([]);
  const [type, setType] = React.useState([]);

  const ChartCmp = () => {
    return(
      <Charts 
        showSelectedPlotData={showSelectedPlotData}
        {...props}
      />
    )
  }

  const CollegeListCmp = () => {
    let title = type ? ( type.name === 'course' ? "Colleges offering "+type.value : "Colleges in "+type.value) : "Colleges"
    return(
      <div style={{marginTop:10, padding: 10}}>
        {plotData.length > 0 &&
        <Card title={title}>
            <CollegeList 
              colleges={plotData} 
              students={students} 
            />
          </Card>
        }
      </div>
    )
  }


  const showSelectedPlotData = (plotData, students, type) => {
      setPlotData(plotData);
      setStudents(students);
      setType(type);
  }
    return(
      <>
       <ChartCmp/>
       <CollegeListCmp/>
      </>
    )
}