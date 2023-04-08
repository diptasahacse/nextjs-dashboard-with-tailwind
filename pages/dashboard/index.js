import React from 'react'
import Sidebar from '../../Components/Dashboard/Layouts/Sidebar'
import Content from '../../Components/Dashboard/Layouts/Content'
import { useState } from 'react';

const Dashboard = () => {
  const [open, setOpen] = useState(true);
  return (
    <div id="dashboard" className='flex '>
      <Sidebar setOpen={setOpen} open={open} />
      <Content />
    </div>
  )
}

export default Dashboard