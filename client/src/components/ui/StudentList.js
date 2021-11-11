import React from 'react';
import AntdTable from '../tables/AntdTable';
import { Tag } from 'antd';


export default function StudentList(props) {
    const renderSkills= (row) => {
      console.log(row);
     return  row.map( item => <Tag color="geekblue" style={{margin: '3px 2px'}}>{item}</Tag>)
    }

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
          },
          {
            title: 'Batch',
            dataIndex: 'yearOfBatch',
            key: 'batch',
          },
    
          {
            title: 'Skills',
            dataIndex: 'skills',
            key: 'skills',
            render: (row) => renderSkills(row)
          }
    ]


  return(
    <AntdTable columns={columns} data={props.data}/>
  )
}