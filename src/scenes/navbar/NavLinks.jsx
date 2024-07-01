import React from 'react';
import { Link } from 'react-router-dom';
const NavLinks = ({ navlinks }) => {
  const { linkTo, text, icon } = navlinks;
  return (
    <Link
      to={linkTo}
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: '18px',
        borderRadius: '20px',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E1E8EF',
        height: '80px',
        width: '80px'
      }}
      className='drop-shadow'
    >
      {icon}
      <p className="text-sm">{text}</p>
    </Link>
  );
};

export default NavLinks;
