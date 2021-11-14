import React from 'react';
import CollegeList from '../ui/CollegeList';
import Charts from './Charts';
import {Card} from 'antd';



export default function Dashboard(props) {
  const [plotData, setPlotData] = React.useState([]);
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
              history={props.history}
            />
          </Card>
        }
      </div>
    )
  }


  const showSelectedPlotData = (plotData,type) => {
    debugger;
      setPlotData(plotData);
      setType(type);
  }
    return(
      <>
       <ChartCmp/>
       <CollegeListCmp/>
      </>
    )
}