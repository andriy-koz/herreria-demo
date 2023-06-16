import Image from 'next/image'
import ButtonContact from './BtnContact'

const Benefits = () => {
  return (
    <div className='mt-16 xl:max-w-7xl xl:px-12 mx-auto' id='benefits'>
      <h2 className='mb-8 text-2xl text-center'>Beneficios</h2>
      <div className='grid grid-cols-2 gap-4 px-4 lg:grid-cols-4'>
        <div className='card bg-base-content shadow-xl'>
          <figure className='px-10 pt-10'>
            <Image
              src='/benefits-icon-3.webp'
              alt='icon'
              className='rounded-xl'
              width={80}
              height={80}
            />
          </figure>
          <div className='card-body items-center text-center text-secondary-content'>
            <p>
              Ofrecemos consultas personalizadas para entender tus necesidades y
              diseñar la pieza perfecta para ti.
            </p>
          </div>
        </div>
        <div className='card bg-base-content shadow-xl'>
          <figure className='px-10 pt-10'>
            <Image
              src='/benefits-icon-1.webp'
              alt='icon'
              className='rounded-xl'
              width={80}
              height={80}
            />
          </figure>
          <div className='card-body items-center text-center text-secondary-content'>
            <p>
              Proporcionamos un servicio de instalación, garantizando que cada
              pieza se integre perfectamente en tu espacio.
            </p>
          </div>
        </div>
        <div className='card bg-base-content shadow-xl'>
          <figure className='px-10 pt-10'>
            <Image
              src='/benefits-icon-4.webp'
              alt='icon'
              className='rounded-xl'
              width={80}
              height={80}
            />
          </figure>
          <div className='card-body items-center text-center text-secondary-content'>
            <p>
              Construidas para durar, nuestras piezas resisten la prueba del
              tiempo y la intemperie.
            </p>
          </div>
        </div>
        <div className='card bg-base-content shadow-xl'>
          <figure className='px-10 pt-10'>
            <Image
              src='/benefits-icon-2.webp'
              alt='icon'
              className='rounded-xl'
              width={80}
              height={80}
            />
          </figure>
          <div className='card-body items-center text-center text-secondary-content'>
            <p>
              Nuestros productos requieren un mantenimiento mínimo, ahorrándote
              tiempo y esfuerzo.
            </p>
          </div>
        </div>
      </div>
      <ButtonContact />
    </div>
  )
}
export default Benefits
