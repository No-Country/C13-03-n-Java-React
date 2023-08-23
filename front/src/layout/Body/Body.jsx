import React from 'react'
import Emergencias from './Emergencias'
import EmergenciasResponsive from './EmergenciasResponsive'
import Carrousel from './Carrousel'
import CarrouselResponsive from './CarrouselResponsive'
import ListaFarmacias from './ListaFarmacias'
import ListaFarmaciasResponsive from './ListaFarmaciasResponsive'

const Body = () => {
	return (
		<>
			<Emergencias />
			<EmergenciasResponsive />
			<Carrousel />
			<CarrouselResponsive />
			<ListaFarmacias />
			<ListaFarmaciasResponsive />
		</>
	)
}

export default Body
