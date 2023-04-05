import React from 'react'

const DashFooter = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="flex p-2 justify-center dark:bg-main-dark-bg dark:text-white">
      <p className='text-center'>© {currentYear} THC - All rights reserved</p>
    </div>
  )
}

export default DashFooter

