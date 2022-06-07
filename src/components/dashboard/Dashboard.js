import React from 'react'
import Dropdown from './Dropdown'
import dData from '../../dashboardData'
import Carousel from './Carousel'
import Sidebar from '../../components/Sidebar'

const Dashboard = () => {
  return (
    <>
      <main>
        <div className='main'>
          <Sidebar />
          <div className='dashboard'>
            <Carousel />
            {dData.map(item => {
              return <Dropdown key={item.id} dropdownItem={item} />
            })}
          </div>
        </div>
      </main>
    </>
  )
}

export default Dashboard
