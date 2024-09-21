import React from 'react'
import "./sidebar.css"
import {TrendingUp, Group,Home, BarChart, Store, Receipt, Assessment, Mail, Feedback, Message, SupervisorAccount, Report } from '@material-ui/icons'

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebarWrapper'>
        
        {/* Dashboard */}
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Dashboard</h3>
          <ul className='sidebarList'>
            <li className='sidebarListItem active'>
              <Home className='sidebarIcon'/>
              Home
            </li>
            <li className='sidebarListItem'>
              <BarChart className='sidebarIcon' />
              Analytics
            </li>
            <li className='sidebarListItem'>
              <TrendingUp className='sidebarIcon' />
              Sales
            </li>
          </ul>
        </div>

        {/* Quick Menu */}
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Quick Menu</h3>
          <ul className='sidebarList'>
            <li className='sidebarListItem active'>
              <Group className='sidebarIcon'/>
              Users
            </li>
            <li className='sidebarListItem'>
              <Store className='sidebarIcon' />
              Products
            </li>
            <li className='sidebarListItem'>
              <Receipt className='sidebarIcon' />
              Transactions
            </li>
            <li className='sidebarListItem'>
              <Assessment className='sidebarIcon' />
              Report
            </li>
          </ul>
        </div>

        {/* Notifications */}
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Notifications</h3>
          <ul className='sidebarList'>
            <li className='sidebarListItem active'>
              <Mail className='sidebarIcon'/>
              Mail
            </li>
            <li className='sidebarListItem'>
              <Feedback className='sidebarIcon' />
              Feedback
            </li>
            <li className='sidebarListItem'>
              <Message className='sidebarIcon' />
              Messages
            </li>
          </ul>
        </div>

        {/* Staff */}
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Staff</h3>
          <ul className='sidebarList'>
            <li className='sidebarListItem active'>
              <SupervisorAccount className='sidebarIcon'/>
              Manage
            </li>
            <li className='sidebarListItem'>
              <BarChart className='sidebarIcon' />
              Analytics
            </li>
            <li className='sidebarListItem'>
              <Report className='sidebarIcon' />
              Report
            </li>
          </ul>
        </div>
        
      </div>
    </div>
  )
}
