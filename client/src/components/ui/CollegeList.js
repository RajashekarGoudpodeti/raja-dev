import React from 'react';
import AntdTable from '../tables/AntdTable'
import { Tag } from 'antd';



export default function CollegeList(props) {

  const renderCourses = (row) => {
    console.log(row);
   return row.map( item => <Tag color="geekblue" style={{margin: '3px 2px'}}>{item}</Tag>)
  }


  const columns = [
    {
        title: 'College',
        dataIndex: 'name',
        key: 'name',
        //render: text => <a>{text}</a>,
      },
      {
        title: 'Courses',
        dataIndex: 'courses',
        key: 'courses',
        render : (row) => renderCourses(row)
      },

      {
        title: 'City',
        dataIndex: 'city',
        key: 'city',
      },

      {
        title: 'State',
        dataIndex: 'state',
        key: 'state',
      },
      {
        title: 'Country',
        dataIndex: 'country',
        key: 'country',
      }
  ]

    return(
        <AntdTable 
          columns={columns} 
          data={props.colleges} 
          students={props.students}
          isExpandable = {true}
        />
    )

}