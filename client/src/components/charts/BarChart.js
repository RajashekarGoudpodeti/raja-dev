import React from 'react';
import { Bar } from '@ant-design/charts';

function BarChart(props) {
  var data = props.data;
  var config = {
    data: data,
    xField: 'value',
    yField: 'type',
    seriesField: 'type',
    label: {
        position: 'middle',
        layout: [
          { type: 'interval-adjust-position' },
          { type: 'interval-hide-overlap' },
          { type: 'adjust-color' },
        ],
      },
    legend: { position: 'bottom-left' },
  };
  return (
     <Bar 
     onReady={(plot) => {
      plot.chart.on('plot:click', (evt) => {
        const { x, y } = evt;
        console.log(plot.chart.getTooltipItems({ x, y }));
        props.handleSelectedArea(plot.chart.getTooltipItems({ x, y }))
      });
    }}
     {...config} 
     />
  );
};

export default BarChart;