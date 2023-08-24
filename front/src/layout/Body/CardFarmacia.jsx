function CardFarmacia({ direccion, telefono, isOpen }) {
	return (
		<div className='card mt-5 w-96 bg-base-100 shadow-xl border-2 border-gray-100 flex-grow'>
			<div className='card-body'>
				<h2 className='card-title'>
					Avenida
					<div className={`badge ${isOpen ? 'badge-accent' : 'badge-error'}`}>
						{isOpen ? 'Abierto' : 'Cerrado'}
					</div>
				</h2>
				<p>Dirección: {direccion}</p>
				<p>otro dato</p>
				<p>otro dato</p>
				<p>Teléfono: {telefono}</p>
				<div className='card-actions justify-end'>
					<div className='badge badge-outline'>
						<a
							href='https://goo.gl/maps/pBeGFRBdRWgj9hRL6'
							target='_blank'
							rel='noreferrer'
						>
							Como llegar
						</a>
					</div>
					<div className='badge badge-outline bg-green-400'>whatsapp</div>
				</div>
			</div>
		</div>
	)
}

export default CardFarmacia
