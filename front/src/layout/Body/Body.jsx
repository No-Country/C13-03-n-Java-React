import React from 'react'
import Emergencias from './Emergencias'
import Carrousel from './Carrousel'
import CarrouselResponsive from './CarrouselResponsive'
import ListaFarmacias from './ListaFarmacias'
import ListaFarmaciasResponsive from './ListaFarmaciasResponsive'

const Body = () => {
	return (
		<>
			{/* pasar debajo de lista de farmacias */}
			<Emergencias />
			{/* <Carrousel />
			<CarrouselResponsive /> */}
			<ListaFarmacias />
			<ListaFarmaciasResponsive />
		</>
	)
}

export default Body
