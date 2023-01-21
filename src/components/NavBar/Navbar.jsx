import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import Logo from '../../assets/Logo.svg'

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='  bg-[#00000080]'>{/*Fijar NavBar */}
      <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
        <img className='w-[7rem] text-3xl font-bold text-[#00df9a]' src={Logo} alt="SAG Logo" />
        {/* <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1> */}
        <ul className='hidden md:flex'>
          <li className='p-4'><a className='text-white' href='/'>Inicio</a></li>
          <li className='p-4'><a className='text-white' href='/producto'>Productos</a></li>
          <li className='p-4'><a className='text-white' href='/'>Servicios</a></li>
          <li className='p-4'><a className='text-white' href='/soporte'>Soporte</a></li>
          <li className='p-4'><a className='text-white' href='/'>Nosotros</a></li>
          <li className='p-4'><a className='text-white' href='/contacto'>Contacto</a></li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <ul  className={nav ? ' z-10  fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-black/90 ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
          {/* <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1> bg-[#000300] rgb(0 3 0 / var(--tw-bg-opacity)); rgb(0 3 0 / 0.8)*/}
          <img className='w-[8rem] text-3xl font-bold text-[#00df9a] p-4' src={Logo} alt="SAG Logo" />
          <li className='p-4 border-b border-gray-600'><a className='text-white' href='/'>Inicio</a></li>
          <li className='p-4 border-b border-gray-600'><a className='text-white' href='/producto'>Productos</a></li>
          <li className='p-4 border-b border-gray-600'><a className='text-white' href='/'>Servicios</a></li>
          <li className='p-4 border-b border-gray-600'><a className='text-white' href='/soporte'>Soporte</a></li>
          <li className='p-4 border-b border-gray-600'><a className='text-white' href='/'>Nosotros</a></li>
          <li className='p-4 border-b border-gray-600'><a className='text-white' href='/contacto'>Contacto</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;