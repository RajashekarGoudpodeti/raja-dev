import React from 'react';
import { Avatar, Image } from 'antd';
import { UserOutlined } from '@ant-design/icons';


function Header() {

  return(
   <>
    <div className="osa-header" style={{width: '100%'}}>
        <span className="logo">
            <Image src ="https://static.wixstatic.com/media/49f65e_020fa9f4c13c4c29b880819958edee5b~mv2.png/v1/fill/w_288,h_102,al_c,q_85,usm_0.66_1.00_0.01/OneShotai_logowhite.webp" alt="logo"></Image>
        </span>
        <span className="avatar">
           <span style={{color: '#fff', marginRight: 10}}> Hi, guest </span> <Avatar style={{ backgroundColor: '#87d068'}} icon={<UserOutlined />}/>
        </span>
    </div>
   </>

  )

}

export default Header;