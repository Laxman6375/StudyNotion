import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/core/Dashboard/Sidebar';

const Dashboard = () => {
    const { loading:authLoading } = useSelector((state) => state.auth);
    const { loading: profileLoading } = useSelector((state) => state.profile);
    
    if (profileLoading || authLoading) {
        return (
            <div className='loader'></div>
        )
    }
  return (
      <div className='  w-full flex '>
          <Sidebar />
          <div className=' w-full overflow-auto overflow-x-hidden'>
              <div className=' mx-auto'><Outlet/></div>
          </div>
    </div>
  )
}

export default Dashboard