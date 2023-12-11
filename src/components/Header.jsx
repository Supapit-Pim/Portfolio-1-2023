import React from 'react';
// import 
import Logo from '../assets/logo.svg';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header className='py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          {/* logo */}
          {/* <a href='/' className='font-primary '> */}
            {/* <img src={Logo} alt='' /> */}
            <div className='font-primary '>
            <h1 className='text-[40px] text-gradient'>Supapit</h1>
            <h1 className='text-[30px] text-white'>Inpang</h1>
            </div>
          {/* </a> */}
          <button className='btn btn-sm'>
          <Link to='contact' smooth={true} spy={true}>
            Work with me
          </Link>
            </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
