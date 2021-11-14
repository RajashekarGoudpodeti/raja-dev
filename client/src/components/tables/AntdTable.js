import React from 'react';
import { Table, Card, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import StudentList from '../ui/StudentList';

const { Meta } = Card;

function AntdTable(props) {

   const[searchInput, setSearchInput] = React.useState('');
   const[data, setData] = React.useState([]);

   React.useEffect(() => {
    setData(props.data);
   },[props.data])

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

    const CustomSearch = () => {
      return (
        <div>
         <Input
           prefix={<SearchOutlined  style={{ color: "#8e8e8e", fontSize: "16px"}}/>}
           className= "ost--datatable-search"
           onChange={handleChange}
           value= {searchInput}
           placeholder="Search in list..."
           style={{width: '200px', marginBottom: 15, border: 'none', backgroundColor: '#f3f1f1'}}
          />
        </div>
      );
    };

     
  const handleChange = (e) => {
    const currValue = e.target.value;
    setSearchInput(currValue);
    const filteredData = props.data.filter(entry => {
       const name = entry.name && entry.name.toLowerCase();
       const state = entry.state && entry.state.toLowerCase();
       const city = entry.city && entry.city.toLowerCase();
       const country = entry.country && entry.country.toLowerCase();
       const courses = entry.courses;
       const searchvalue = currValue && currValue.toLowerCase();
       if((name && name.includes(searchvalue)) || (state && state.includes(searchvalue)) 
          || (city && city.includes(searchvalue)) || (country && country.includes(searchvalue)) || 
          (courses && courses.find(ele => ele.toLowerCase().includes(searchvalue)))) return true;
    });
    setData(filteredData);
  };

    return (
      <>
      {CustomSearch()}
         <Table
           columns={props.columns}
            dataSource={data}
            showHeader = {false}
            // expandable={{
            //     expandedRowRender: record => fetchData(record),
            //     rowExpandable: () => props.isExpandable,
            //     expandedRowClassName: () => "ost-exp-row" 
            // }}
            //bordered 
         />
      </>
    )
}

export default AntdTable;