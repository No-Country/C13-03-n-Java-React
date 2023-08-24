import React from 'react'
import Emergencias from './Emergencias'
import Carrousel from './Carrousel'
import CarrouselResponsive from './CarrouselResponsive'
import ListaFarmacias from './ListaFarmacias'
import ListaFarmaciasResponsive from './ListaFarmaciasResponsive'
import ChatBubble from './ChatBubble'
import Tabs from './Tabs'
import { useState } from 'react'

const Body = () => {
	const [currentTab, setCurrentTab] = useState(true)

	return (
		<>
			{/* pasar debajo de lista de farmacias */}
			<Emergencias />
			<Carrousel />
			{/* <CarrouselResponsive /> */}
			<Tabs
				currentTab={currentTab}
				setCurrentTab={setCurrentTab}
			/>
			<ListaFarmacias currentTab={currentTab} />
			<ListaFarmaciasResponsive />
			<ChatBubble />
		</>
	)
}

export default Body
