import React from 'react';
import { Pie } from '@ant-design/charts';

function PieChart(props) {
  var data = props.data;
  var config = {
    appendPadding: 10,
    data: data,
    angleField: 'value',
    colorField: 'type',
    radius: 1,
    innerRadius: 0.6,
    label: {
      type: 'inner',
      offset: '-50%',
      content: '{value}%',
      style: {
        textAlign: 'center',
        fontSize: 12,
      },
    },
    interactions: [{ type: 'element-selected' }, { type: 'element-active' }],
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: 'pre-wrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          fontSize: 18
        },
        content: props.name,
      },
    },
  };
  return (
     <Pie 
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

export default PieChart;