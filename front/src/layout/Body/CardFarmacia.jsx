function CardFarmacia({ direccion, telefono, isOpen }) {
  return (
    <div className='card w-96 bg-base-100 shadow-xl'>
      <div className='card-body'>
        <h2 className='card-title'>
          Avenida
          <div className='badge badge-secondary'>
            {isOpen ? 'Abierto' : 'Cerrado'}
          </div>
        </h2>
        <p>Dirección: {direccion}</p>
        <p>otro dato</p>
        <p>otro dato</p>
        <p>Teléfono: {telefono}</p>
        <div className='card-actions justify-end'>
          <div className='badge badge-outline'>Como llegar</div>
          <div className='badge badge-outline bg-green-400'>whatsapp</div>
        </div>
      </div>
    </div>
  )
}

export default CardFarmacia