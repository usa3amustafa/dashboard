import React from 'react'
import Dropdown from './Dropdown'
import dData from '../../dashboardData'
import Carousel from './Carousel'

const Dashboard = () => {
  return (
    <>
      <Carousel />
      {dData.map(item => {
        return <Dropdown key={item.id} dropdownItem={item} />
      })}
    </>
  )
}

export default Dashboard
