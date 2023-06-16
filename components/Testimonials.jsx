import Image from 'next/image'

const Testimonials = () => {
  return (
    <div className='px-4 mt-16 lg:max-w-5xl mx-auto' id='testimonials'>
      <h2 className='text-center text-2xl mb-8'>
        Nuestro Compromiso Reflejado en Palabras
      </h2>
      <div className='flex flex-col gap-4'>
        <div className='card card-side bg-base-100 shadow-xl'>
          <div className='avatar flex items-center ml-3'>
            <div className='w-24 h-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'>
              <Image
                src='/testimonials-1.webp'
                alt='profile photo'
                width={64}
                height={64}
              />
            </div>
          </div>
          <div className='card-body'>
            <h2 className='card-title'>- Carlos Rivera</h2>
            <p>
              Estoy absolutamente encantado con la reja de seguridad que
              instalaron en mi negocio. La atención al detalle es evidente y el
              servicio de instalación fue impecable.
            </p>
          </div>
        </div>
        <div className='card card-side bg-base-100 shadow-xl'>
          <div className='avatar flex items-center ml-3'>
            <div className='w-24 h-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'>
              <Image
                src='/testimonials-2.webp'
                alt='profile photo'
                width={64}
                height={64}
              />
            </div>
          </div>
          <div className='card-body'>
            <h2 className='card-title'>- Luisa Fernández</h2>
            <p>
              La herrería que encargué para mi jardín es impresionante. No solo
              es hermosa, sino que ha resistido maravillosamente a través de
              todas las estaciones.
            </p>
          </div>
        </div>
        <div className='card card-side bg-base-100 shadow-xl'>
          <div className='avatar flex items-center ml-3'>
            <div className='w-24 h-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'>
              <Image
                src='/testimonials-3.webp'
                alt='profile photo'
                width={64}
                height={64}
              />
            </div>
          </div>
          <div className='card-body'>
            <h2 className='card-title'>- Martín Perez</h2>
            <p>
              Contraté a este equipo para un proyecto de herrería personalizado
              en mi hogar. Su capacidad para captar mi visión y convertirla en
              realidad fue asombrosa.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
