import React from 'react'

const ListaFarmacias = () => {
	return (
		<>
			<div className='flex p-5 justify-center gap-4'>
				<div className='card w-96 bg-base-100 shadow-xl'>
					<div className='card-body'>
						<h2 className='card-title'>
							Avenida
							<div className='badge badge-secondary'>Abierto</div>
						</h2>
						<p>Dirección: Avenida Argentina 331, Q8300 Neuquén</p>
						<p>otro dato</p>
						<p>otro dato</p>
						<p>Teléfono: 0299 442-2858</p>
						<div className='card-actions justify-end'>
							<div className='badge badge-outline'>Como llegar</div>
							<div className='badge badge-outline bg-green-400'>whatsapp</div>
						</div>
					</div>
				</div>
				<div className='card w-96 bg-base-100 shadow-xl'>
					<div className='card-body'>
						<h2 className='card-title'>
							DEL PUEBLO (Alberdi)
							<div className='badge badge-secondary'>Abierto</div>
						</h2>
						<p>Dirección: Alberdi 290, Q8300 Neuquén</p>
						<p>otro dato</p>
						<p>otro dato</p>
						<p>Teléfono: 0299 4424032</p>
						<div className='card-actions justify-end'>
							<div className='badge badge-outline'>Como llegar</div>
							<div className='badge badge-outline bg-green-400 '>whatsapp</div>
						</div>
					</div>
				</div>
				<div className='card w-96 bg-base-100 shadow-xl'>
					<div className='card-body'>
						<h2 className='card-title'>
							GLOBAL (Illia)
							<div className='badge badge-secondary'>Abierto</div>
						</h2>
						<p>Dirección: ILLIA 774, Q8300 Neuquén</p>
						<p>otro dato</p>
						<p>otro dato</p>
						<p>Teléfono: 0299-154286169</p>
						<div className='card-actions justify-end'>
							<div className='badge badge-outline'>Como llegar</div>
							<div className='badge badge-outline bg-green-400'>whatsapp</div>
						</div>
					</div>
				</div>
				<div className='card w-96 bg-base-100 shadow-xl'>
					<div className='card-body'>
						<h2 className='card-title'>
							NUEVA INTEGRAL II
							<div className='badge badge-secondary'>Abierto</div>
						</h2>
						<p>Dirección: Cnel Racedo 305, Q8300 Neuquén</p>
						<p>otro dato</p>
						<p>otro dato</p>
						<p>Teléfono: 0299-6589200</p>
						<div className='card-actions justify-end'>
							<div className='badge badge-outline'>Como llegar</div>
							<div className='badge badge-outline bg-green-400'>whatsapp</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default ListaFarmacias
