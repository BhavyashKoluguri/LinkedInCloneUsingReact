import React from 'react';
import "./Sidebar.css"
import  AccountCircleIcon  from '@mui/icons-material/AccountCircle';


function Sidebar() {
    const recentItem = (topic) => (
        <div className='sidebar__recentItem'>
            <span className='sidebar__hash'>#</span>
            <p>{topic}</p>
        </div>
    );


  return (
    <div className='sidebar'>
      <div className='sidebar__top'>
        <img src="wp4531533.webp" alt=""/>
        <AccountCircleIcon className='sidebar__avatar'/>
        <h2>Koluguri Bhavyash</h2>
        <h4>19n81a05n4bhavyash@gmail.com</h4> 
      </div>
      <div className="sidebar__stats">
        <div className='sidebar__stat'>
            <p>Who viewed you</p>
            <p className='sidebar__statNumber'>6,747</p>
        </div>
        <div className='sidebar__stat'>
        <p>Views on post</p>
        <p className='sidebar__statNumber'>3,254</p>
        </div>
      </div>
      <div className='sidebar__bottom'>
        <p>Recent</p>
        {recentItem('HTML_CSS_JAVASCRIPT')}
        {recentItem('Programming(JAVA)')}
        {recentItem('DSA')}
        {recentItem('Learning React Library')}
        {recentItem('Practicing in Leet Code')}
      </div>
    </div>
  );
}

export default Sidebar;


