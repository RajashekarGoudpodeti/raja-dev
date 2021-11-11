import React from 'react';
import { Table, Card } from 'antd';
import StudentList from '../ui/StudentList';

const { Meta } = Card;

function AntdTable(props) {
    const fetchData = (record) => {
       console.log(props);
       let stds = props.students && props.students.filter( item => item.college === record.name)
       let suggColleges = props.data.filter(item => item.courses.some( r =>  record.courses.includes(r)));
       console.log('suggColleges ',suggColleges);
       return ( 
                <div style={{marginTop:10, padding: 20}}>
                    <Card title="Students" style={{boxShadow: '0px 0px 10px #d1cccc',  borderRadius: 10}}>
                        <StudentList data={stds}/> 
                    </Card>
                    <Card title="Colleges offering similar courses" style={{boxShadow: '0px 0px 10px #d1cccc',  borderRadius: 10,marginTop:20}}>
                    { suggColleges &&
                      <div style={{display:'flex',flexWrap: 'wrap'}}>
                          {suggColleges.map( coll => 
                           
                            <Card
                            hoverable
                            style={{ width: 130, margin: '10px 10px', borderRadius : 10 }}
                          >
                            <Meta title={coll.name} description={coll.city} />
                          </Card>,
                          )}
                        </div>
                      }
                    </Card>
                </div> 
            )
    }

    return (
         <Table
           columns={props.columns}
            dataSource={props.data}
            expandable={{
                expandedRowRender: record => fetchData(record),
                rowExpandable: () => props.isExpandable,
                expandedRowClassName: () => "ost-exp-row" 
            }}
            bordered 
         />
    )
}

export default AntdTable;