import React, { useState } from 'react'
import Card from './Card'

const Dropdown = props => {
  const [isOpen, setIsOpen] = useState(true)

  const handleOpen = currIsOpen => setIsOpen(!currIsOpen)

  return (
    <>
      <div className='dropdown'>
        <div className='dropdown-topbar'>
          <h2 className='dropdown-title' onClick={() => handleOpen(isOpen)}>
            <i className='fa-solid fa-chevron-up dropdown-btn'></i>
            {props.dropdownItem.dropdownTitle} (
            {props.dropdownItem.cards.length})
          </h2>

          <i className='fa-solid fa-arrow-down-wide-short'></i>
        </div>

        {/* card component */}
        <div className={`cards ${isOpen && 'cards-open'}`}>
          {props.dropdownItem.cards.map(c => (
            <Card cardData={c} key={c.id} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Dropdown
