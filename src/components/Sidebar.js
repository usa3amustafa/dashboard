import React from 'react'

const Sidebar = () => {
  return (
    <div className='side-bar'>
      <div className='side-bar-item side-bar-active'>
        <div className='side-bar-icon'>
          <i className='fa-solid fa-chart-line'></i>
        </div>
        <p className='side-bar-text'>dashboard</p>
      </div>
      <div className='side-bar-item'>
        <div className='side-bar-icon'>
          <i className='fa-solid fa-address-book'></i>
        </div>
        <p className='side-bar-text'>contacts</p>
      </div>
      <div className='side-bar-item'>
        <div className='side-bar-icon'>
          <i className='fa-solid fa-file-invoice'></i>
        </div>
        <p className='side-bar-text'>Quotations</p>
      </div>
      <div className='side-bar-item'>
        <div className='side-bar-icon'>
          <i className='fa-solid fa-file'></i>
        </div>
        <p className='side-bar-text'>Applications</p>
      </div>
      <div className='side-bar-item'>
        <div className='side-bar-icon'>
          <i className='fa-solid fa-bell'></i>
        </div>
        <p className='side-bar-text'>Notifications</p>
      </div>
    </div>
  )
}

export default Sidebar
