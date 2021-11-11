import React from 'react';
import StateWiseColleges from '../reports/StateWiseColleges';
import CourseWiseColleges from '../reports/CourseWiseColleges';


const Charts = React.memo(props =>  {

    return(
      <>
      <div style={{display: 'flex'}}>
        <div className="ost-dashboard-chart">
          <StateWiseColleges 
           showSelectedPlotData={props.showSelectedPlotData}
            {...props}
          />
        </div>
        <div className="ost-dashboard-chart">
        <CourseWiseColleges 
             showSelectedPlotData={props.showSelectedPlotData}
            {...props}
          />
        </div>
       </div>
      </>
    )
})

export default Charts;