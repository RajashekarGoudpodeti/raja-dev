import React from 'react';
import AntdTable from '../tables/AntdTable'
import { UserOutlined,StarOutlined, StarFilled } from '@ant-design/icons';
import { Tag, Typography, Badge, Card } from 'antd';

const { Text } = Typography;



export default function CollegeList(props) {

  const renderCourses = (courses) => {
    console.log(courses);
   return courses.map( item => <Tag color="geekblue" style={{margin: '3px 2px'}}>{item}</Tag>)
  }
  
  const showCollege = (e,name) => {
    props.history.push("/college/"+name);
  }
  const renderColleges = (row,record) => {
      return (
        <>
        <Card style={{cursor: 'pointer'}} onClick={(e,row) => showCollege(e,record.name)}>
          <h3 style={{color : '#35478c'}}>{record.name}</h3>
          <div style={{position: 'absolute', right: 20, top: 20}}><UserOutlined /> {record.noOfStudents}</div>
          <div style={{ display: 'flex'}}>
            <Text type="secondary" style={{ marginRight : 5 }}>{record.city}</Text>
            <Badge status="default" />
            <Text type="secondary" style={{ marginRight : 5 }} >{record.state}</Text>
            <Badge status="default" />
            <Text type="secondary" style={{ marginRight : 5 }}>{record.country}</Text>
          </div>
          <div style={{marginTop: 15}}>
            {renderCourses(record.courses)}
          </div>
          <div style={{position: 'absolute', right: 20, bottom: 10}}>
            <StarFilled style={{ color : '#ffa600'}}/>
            <StarFilled style={{ color : '#ffa600'}}/>
            <StarFilled style={{ color : '#ffa600'}}/>
            <StarOutlined />
            <StarOutlined />
          </div>
          </Card>
        </>
      )
  }


  const columns = [
    {
        title: 'College',
        dataIndex: 'name',
        key: 'name',
        render: (row,record) => renderColleges(row,record),
      },
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