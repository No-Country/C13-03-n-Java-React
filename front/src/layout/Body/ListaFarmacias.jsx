import CardFarmacia from './CardFarmacia'

const ListaFarmacias = ({ currentTab = false }) => {
	const allPharmacy = [
		{
			direccion: 'Ruta Panamericana Km 36, Tortuguitas, Pcia. de Buenos Aires',
			telefono: ' (+54 3327) 45 8000/8500',
			isOpen: true,
		},
		{
			direccion:
				'Avenida Olivos 4109 altura ruta Panamericana km 35,5 Ramal Pilar',
			telefono: '(+54 3327) 450620',
			isOpen: true,
		},
		{
			direccion: 'S2001KDK, Rosario, Santa Fe, Argentina',
			telefono: ' (+54 341) 465 5777',
			isOpen: true,
		},
		{
			direccion: 'Calle Dr. Mariano Moreno 1228',
			telefono: '(54 11) 4124 7200',
			isOpen: false,
		},
		{
			direccion: 'Calle 1 y 60 La Plata CP 1900',
			telefono: '051-802163',
			isOpen: false,
		},
		{
			direccion: 'San Fernando del Valle de Catamarca CP 4700',
			telefono: '0351 4 342175',
			isOpen: false,
		},
		{
			direccion: 'Av. Colon 1775 Barrio Alberdi	Ciudad de Córdoba CP 5000',
			telefono: '03783 4 30422',
			isOpen: false,
		},
		{
			direccion: 'Caseros 356	Ciudad de Córdoba CP 5000',
			telefono: '02965 4 81201',
			isOpen: false,
		},
		{
			direccion: 'San Lorenzo 837	Corrientes CP 3400',
			telefono: '0388 4 221218',
			isOpen: false,
		},
	]
	return (
		<div className='min-h-screen'>
			<div className='flex flex-wrap justify-center gap-4'>
				{allPharmacy.map(({ direccion, telefono, isOpen }, index) => {
					if (currentTab && isOpen)
						return (
							<CardFarmacia
								key={index}
								direccion={direccion}
								telefono={telefono}
								isOpen={isOpen}
							/>
						)

					if (!currentTab)
						return (
							<CardFarmacia
								key={index}
								direccion={direccion}
								telefono={telefono}
								isOpen={isOpen}
							/>
						)
				})}
			</div>
		</div>
	)
}

export default ListaFarmacias
