import React from 'react'
import SubNav from './SubNav';
const Navbar = () => {
  return (
    <div className="w-full h-[58px] flex items-center justify-center">
      <div className="fixed  hidden sm:flex w-full md:top-9  md:w-fit md:rounded-full justify-between items-center  p-2 dark:bg-[#2F333A66] backdrop-blur-xl z-[99] gap-2">
        <span className="h-9 w-9 rounded-full bg-green-500 mr-6">
          <img src="" alt="" />
        </span>
        <SubNav />
      </div>
    </div>
  );      
}

export default Navbar