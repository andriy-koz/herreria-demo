import Image from 'next/image'

const Carrousel = () => {
  return (
    <div className='mt-16 text-center' id='carrousel'>
      <h2 className='text-2xl px-4'>Nuestro Trabajo en Acción:</h2>
      <p className='text-md px-4 lg:text-lg'>
        Descubre la Belleza y Versatilidad de Nuestras Creaciones
      </p>
      <div className='carousel w-full mt-8 xl:h-[700px]'>
        <div id='slide1' className='carousel-item relative w-full'>
          <Image
            alt='carrousel image'
            width={1280}
            height={1000}
            src='/carrousel-1.webp'
            className='w-full'
          />
          <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
            <a href='#slide3' className='btn btn-circle'>
              ❮
            </a>
            <a href='#slide2' className='btn btn-circle'>
              ❯
            </a>
          </div>
        </div>
        <div id='slide2' className='carousel-item relative w-full'>
          <Image
            alt='carrousel image'
            width={1280}
            height={1000}
            src='/carrousel-2.webp'
            className='w-full'
          />
          <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
            <a href='#slide1' className='btn btn-circle'>
              ❮
            </a>
            <a href='#slide3' className='btn btn-circle'>
              ❯
            </a>
          </div>
        </div>
        <div id='slide3' className='carousel-item relative w-full'>
          <Image
            alt='carrousel image'
            width={1280}
            height={1000}
            src='/carrousel-3.webp'
            className='w-full'
          />
          <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
            <a href='#slide2' className='btn btn-circle'>
              ❮
            </a>
            <a href='#slide1' className='btn btn-circle'>
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Carrousel
