import React from 'react';
import { DashboardOutlined, ShopOutlined, UserOutlined } from '@ant-design/icons';
import CollegeList from './CollegeList';
import StudentList from './StudentList';
import Dashboard from './Dashboard';


function Layout() {
    const[key, setKey] = React.useState('dashboard');
    const[colleges, setColleges] = React.useState([]);
    const[students, setStudents] = React.useState([]);

    React.useEffect(() => {
      const fetchData =  async() => {
        
        const colleges =  await getColleges();
        console.log(colleges);
        const students =  await getStudents();
        console.log(students);
        let cdata = [];
        let sdata = [];
  
        colleges && colleges.forEach((item, index) => {
          item.key = index;
          cdata.push(item);
        })
  
        students && students.forEach((item, index) => {
          item.key = index;
          sdata.push(item);
        })
  
        console.log('cdata is ',cdata, sdata);
        setColleges(cdata);
        setStudents(sdata);
      }
      fetchData();
    },[]);

    const getColleges = async () => {
      return await  fetch('/colleges').then(res => res.json()).then(data => data);
    }

    const getStudents = async () => {
      return await fetch('/students').then(res => res.json()).then(data => data);
    }


    const selectItem = (e) => {
      console.log(e);
      setKey(e.currentTarget.dataset.key);
      document.querySelector('.active').classList.remove('active');
      e.currentTarget.classList.add('active');
    }

    return(
        <div className="ost-content-container">
              <div className="ost-palette">
              <div className="item active" onClick={selectItem} data-key="dashboard">
                    <p> 
                      <DashboardOutlined style={{marginRight: 10}}/>
                       Dashboard
                    </p>
                </div>
                <div className="item" onClick={selectItem} data-key="colleges">
                    <p>
                       <ShopOutlined style={{marginRight: 10}}/> 
                       Colleges 
                    </p>
                </div>
              </div>
                
                
              
              <div className="ost-content">
                {key === 'dashboard' && 
                  <>
                    <p> 
                    <DashboardOutlined style={{marginRight: 10}}/>
                    Home / Dashboard
                  </p>
                    <Dashboard colleges={colleges}/>
                  </>
                }
                {key === 'colleges' && 
                    <>
                      <p>
                        <ShopOutlined style={{marginRight: 10}}/> 
                        Home / Colleges 
                      </p>
                      <CollegeList colleges={colleges} students={students}/>
                    </>
                }
              </div>
         </div>
    )
}

export default Layout;