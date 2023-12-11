import React from 'react';
// import 
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header className='py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
            <div className='font-primary '>
            <h1 className='text-[40px] text-gradient'>Supapit</h1>
            <h1 className='text-[30px] text-white'>Inpang</h1>
            </div>
          <div className='text-gradient'>My Portfolio</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
