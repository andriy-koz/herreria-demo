'use client'

import Image from 'next/image'
import Link from 'next/link'
import handleScroll from '@/utils/handleScroll'

const Navbar = () => {
  return (
    <div className='navbar bg-base-100/80 fixed z-10 backdrop-blur-sm'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <label tabIndex={0} className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'>
            <li>
              <Link href='#purpose' onClick={handleScroll}>
                Nuestra propuesta
              </Link>
            </li>
            <li>
              <Link href='#benefits' onClick={handleScroll}>
                Beneficios
              </Link>
            </li>
            <li>
              <Link href='#carrousel' onClick={handleScroll}>
                Casos de uso
              </Link>
            </li>
            <li>
              <Link href='#testimonials' onClick={handleScroll}>
                Testimonios
              </Link>
            </li>
          </ul>
        </div>
        <a className='btn btn-ghost normal-case text-xl'>
          <Image
            src='/logo.webp'
            alt='logo'
            width={48}
            height={48}
            className='brightness-200 -mr-3'
          />
          Herrería <br /> <span className='text-xs'>DEMO</span>
        </a>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1'>
          <li>
            <Link href='#purpose' onClick={handleScroll}>
              Nuestra propuesta
            </Link>
          </li>
          <li>
            <Link href='#benefits' onClick={handleScroll}>
              Beneficios
            </Link>
          </li>
          <li>
            <Link href='#carrousel' onClick={handleScroll}>
              Casos de uso
            </Link>
          </li>
          <li>
            <Link href='#testimonials' onClick={handleScroll}>
              Testimonios
            </Link>
          </li>
        </ul>
      </div>
      <div className='navbar-end'>
        <Link href='#contact' onClick={handleScroll} className='btn'>
          Contacto
        </Link>
      </div>
    </div>
  )
}

export default Navbar
