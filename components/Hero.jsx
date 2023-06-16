import ButtonContact from './BtnContact'

const Hero = () => {
  return (
    <div
      className='hero min-h-screen'
      style={{
        backgroundImage: 'url(/hero.webp)',
      }}
      id='hero'>
      <div className='hero-overlay bg-opacity-60'></div>
      <div className='hero-content text-center text-neutral-content'>
        <div className='max-w-md'>
          <h1 className='mb-5 text-5xl font-bold'>
            Arte y Funcionalidad en Cada Pieza de Herrería
          </h1>
          <p className='mb-5 lg:text-2xl'>
            Transformamos el metal en la herrería más fina para tu hogar o
            negocio
          </p>
          <ButtonContact />
        </div>
      </div>
    </div>
  )
}

export default Hero
