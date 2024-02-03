import React, { useState } from 'react';
import "./Feed.css";
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post';

function Feed() {

    

    const sendPost  = e => {
        e.preventDefault();
    }


  return (
    <div className='feed'>
      <div className='feed__inputContainer'>
        <div className='feed__input'>
            <CreateIcon />
            <form>
                <input type="text" placeholder='Start a post'/>
                <button onClick={sendPost} type='Submit'>Send</button>
            </form>
        </div>
        <div className='feed__inputOptions'>
            <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9"/>
            <InputOption Icon={SubscriptionsIcon} title="Video" color="#7A33E"/>
            <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD"/>
            <InputOption Icon={CalendarViewDayIcon} title="Write article" color="#7FC15E"/>
        </div>   
      </div>

        
        <Post name='Yash Koluguri' description='This is a test' message='Wow this worled'/>
        <Post name='Rinku' description='demands' message='I want a Mac book air'/>
        <Post name='Keerthi' description='complaint' message='Why are you Shouting?'/>


    </div>
  );
}

export default Feed;
