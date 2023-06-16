'use client'

import handleScroll from '@/utils/handleScroll'
import Link from 'next/link'

const ButtonContact = () => {
  return (
    <button className='btn btn-primary mt-12 block mx-auto'>
      <Link href='#contact' onClick={handleScroll}>
        contacto
      </Link>
    </button>
  )
}

export default ButtonContact
