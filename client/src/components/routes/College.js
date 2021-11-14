import React from 'react';
import { UserOutlined,StarOutlined, StarFilled, ArrowLeftOutlined } from '@ant-design/icons';
import { Tag,Typography, Badge, Card } from 'antd';
import StudentList from '../ui/StudentList';

const { Text } = Typography;
const { Meta } = Card;


class College extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      college: [],
      students: [] ,
      relColleges: [],
      isLoading: true
    }
    this.collegeName = props.history.location.pathname.split("/").pop();
  }


  
  componentDidMount() {
    const fetchData =  async() => {
        
      const college =  await fetch('/colleges?name='+this.collegeName).then(res => res.json()).then(data => data);
      console.log(college);

      const students =  await await fetch('/students?college='+this.collegeName).then(res => res.json()).then(data => data);
      console.log(students);

      const courses = college[0].courses.reduce(function(crs, curr){
             crs += curr +';';
             return crs;
      },"")

      const relcolleges =  await await fetch('/colleges?state='+college[0].state).then(res => res.json()).then(data => data);
      console.log(relcolleges);

      let cdata = [];
      let sdata = [];

      relcolleges && relcolleges.forEach((item, index) => {
        item.key = index;
        cdata.push(item);
      })

      students && students.forEach((item, index) => {
        item.key = index;
        sdata.push(item);
      })

      let suggColleges = cdata.filter(item => item.courses.some( r =>  college[0].courses.includes(r)));

      console.log('cdata is ',cdata, sdata, suggColleges);
      this.setState ( {
        college: college[0],
        relcolleges: suggColleges,
        students: sdata,
        isLoading: false
      })
    }
    fetchData();
  }

  goBack =() => {
    this.props.history.goBack();
  }

  renderCourses = (courses) => {
   return courses.map( item => <Tag color="geekblue" style={{margin: '3px 2px'}}>{item}</Tag>)
  }


 render() {
   let { college, students, isLoading , relcolleges} = this.state;
    return(
      <>
      { isLoading ?
         <div> Loading</div>
      :
      <>
      {college ?
      <>
     
      <Card>
        <span><ArrowLeftOutlined style={{position: 'absolute', top: 30, left: 5, fontSize: '18px', color: '#35478c'}} onClick={() => this.goBack()}/></span>
        <div style={{marginLeft : '10px'}}>
          <h3 style={{color : '#35478c'}}>{college.name}</h3>
          <div style={{position: 'absolute', right: 20, top: 20}}><UserOutlined /> {college.noOfStudents}</div>
          <div style={{ display: 'flex'}}>
            <Text type="secondary" style={{ marginRight : 5 }}>{college.city}</Text>
            <Badge status="default" />
            <Text type="secondary" style={{ marginRight : 5 }} >{college.state}</Text>
            <Badge status="default" />
            <Text type="secondary" style={{ marginRight : 5 }}>{college.country}</Text>
          </div>
          <div style={{marginTop: 15}}>
            {this.renderCourses(college.courses)}
          </div>
          <div style={{position: 'absolute', right: 20, bottom: 10}}>
            <StarFilled style={{ color : '#ffa600'}}/>
            <StarFilled style={{ color : '#ffa600'}}/>
            <StarFilled style={{ color : '#ffa600'}}/>
            <StarOutlined />
            <StarOutlined />
          </div>
          </div>
      </Card>
      <Card>
        <StudentList data={students}/>
      </Card>
      <Card title={<h3 style={{color : '#35478c'}}>Colleges offering similar course</h3>} >
          { relcolleges &&
              <div style={{display:'flex', width: '90vw', overflow:'auto'}}>
                  {relcolleges.map( coll => 
                    
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
      </>
       :
        <h1> College not found </h1>
       }
      </>
    }
      </>
    )
 }
}

export default College;