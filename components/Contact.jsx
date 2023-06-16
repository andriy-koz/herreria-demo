const Contact = () => {
  return (
    <div
      className='hero mt-16 bg-base-200 py-8 lg:max-w-5xl mx-auto'
      id='contact'>
      <div className='hero-content flex-col lg:flex-row-reverse'>
        <div className='text-center lg:text-left'>
          <h2 className='text-4xl font-bold'>
            Tu Obra Maestra en Metal Te Espera
          </h2>
          <p className='py-6 xl:text-lg'>
            Inicia tu camino hacia una pieza de herrería única y duradera hoy
            mismo. Agenda una consulta gratuita con nosotros y deja que te
            ayudemos a hacer realidad tu visión.
          </p>
        </div>
        <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
          <div className='card-body'>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Nombre</span>
              </label>
              <input
                type='text'
                placeholder='Ingresa tu nombre'
                className='input input-bordered'
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Email</span>
              </label>
              <input
                type='text'
                placeholder='Ingresa tu email'
                className='input input-bordered'
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Teléfono</span>
              </label>
              <input
                type='tel'
                placeholder='Ingresa tu número telefónico'
                className='input input-bordered'
              />
            </div>
            <div className='form-control mt-6'>
              <button className='btn btn-primary'>enviar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
