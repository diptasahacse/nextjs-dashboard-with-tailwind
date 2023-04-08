import React from 'react'
import Sidebar from '../../Components/Dashboard/Layouts/Sidebar'
import Content from '../../Components/Dashboard/Layouts/Content'

const Dashboard = () => {
  
  return (
    <div id="dashboard" className='flex '>
      <Sidebar />
      <Content />
    </div>
  )
}

export default Dashboard