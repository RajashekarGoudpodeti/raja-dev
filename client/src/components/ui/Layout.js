import React from 'react';
import { DashboardOutlined, ShopOutlined, UserOutlined } from '@ant-design/icons';
import CollegeList from './CollegeList';
import StudentList from './StudentList';
import Dashboard from './Dashboard';


function Layout(props) {
    const[key, setKey] = React.useState('dashboard');
    const[colleges, setColleges] = React.useState([]);

    React.useEffect(() => {
      const fetchData =  async() => {
        
        const colleges =  await getColleges();
        console.log(colleges);

        let cdata = [];

  
        colleges && colleges.forEach((item, index) => {
          item.key = index;
          cdata.push(item);
        })
  
        console.log('cdata is ',cdata);
        setColleges(cdata);

      }
      fetchData();
    },[]);

    const getColleges = async () => {
      return await  fetch('/colleges').then(res => res.json()).then(data => data);
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
                    <Dashboard colleges={colleges} {...props}/>
                  </>
                }
                {key === 'colleges' && 
                    <>
                      <p>
                        <ShopOutlined style={{marginRight: 10}}/> 
                        Home / Colleges 
                      </p>
                      <CollegeList colleges={colleges} {...props}/>
                    </>
                }
              </div>
         </div>
    )
}

export default Layout;