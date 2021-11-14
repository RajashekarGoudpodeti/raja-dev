import React from 'react';
import AntdTable from '../tables/AntdTable';
import { Tag, Typography, Card, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Text } = Typography;


export default function StudentList(props) {
    const renderSkills= (row) => {
      console.log(row);
     return  row.map( item => <Tag color="geekblue" style={{margin: '3px 2px'}}>{item}</Tag>)
    }

    const renderStudents = (row,record) => {
      return (
        <>
        <Card>
        <Avatar style={{ backgroundColor: '#35478c87', position:'absolute', top: 45}} size="large" icon={<UserOutlined />}/>
          <div style={{marginLeft: 65}}>
          <h3 style={{color : '#35478c'}}>{record.name}</h3>

          <div style={{ display: 'flex', marginBottom: 10}}>
            <Text type="secondary" style={{ marginRight : 5 }}>Year of passing: {record.yearOfBatch.substring(0,4)}</Text>
          </div>
          {renderSkills(record.skills)}
          </div>
          </Card>
        </>
      )
  }

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render : (row,record) => renderStudents(row,record)
          },
          // {
          //   title: 'Batch',
          //   dataIndex: 'yearOfBatch',
          //   key: 'batch',
          // },
    
          // {
          //   title: 'Skills',
          //   dataIndex: 'skills',
          //   key: 'skills',
          //   render: (row) => renderSkills(row)
          // }
    ]


  return(
    <AntdTable columns={columns} data={props.data}/>
  )
}