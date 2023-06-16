import Image from 'next/image'

const Purpose = () => {
  return (
    <div
      className='px-4 py-14 bg-secondary-content lg:text-xl mt-16 lg:py-4'
      id='purpose'>
      <h2 className='text-2xl text-center'>Nuestra Propuesta</h2>
      <div className='divider mt-2 mb-10 w-1/4 mx-auto'></div>
      <div className='flex flex-col gap-10 lg:max-w-screen-lg lg:mx-auto lg:gap-0'>
        <div className='flex justify-center items-center lg:max-h-72'>
          <p className='flex-1 lg:text-right lg:-mr-16'>
            Combinamos técnicas tradicionales de herrería con diseños modernos y
            personalizados para brindarte piezas únicas y duraderas.
          </p>
          <Image
            className='mask mask-hexagon flex-1 w-1/2 lg:max-h-72'
            src='/purpose-1.webp'
            alt='chair'
            width={700}
            height={700}
          />
        </div>
        <div className='divider'></div>
        <div className='flex justify-center items-center'>
          <Image
            className='mask mask-hexagon flex-1 w-1/2 lg:max-h-72'
            src='/purpose-2.webp'
            alt='chair'
            width={700}
            height={700}
          />
          <p className='flex-1 lg:text-left lg:-ml-16'>
            Cada trabajo es un reflejo de nuestra pasión por el arte en metal.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Purpose
