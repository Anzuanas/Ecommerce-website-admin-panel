import React from 'react'
import "./topbar.css"
import {NotificationsNone, Language, Settings} from '@material-ui/icons';

export default function Topbar() {
  return (
    <div className='topbar'>
      <div className='topbarWrapper'>
        <div className='topLeft'>
        <span className='logo'>lamaadmin</span>
        </div>
        <div className='topRight'>
        <div className='topbarIconContainer'>
        <NotificationsNone />
        <span className='topIconBadge'>2</span>
        </div>

        <div className='topbarIconContainer'>
        <Language />
        
        </div>

        <div className='topbarIconContainer'>
        <Settings />
       
        </div>

    <img src="/images/me.jpg" alt='' className='topAvatar'></img>
        </div>
      </div>
    </div>
  )
}
