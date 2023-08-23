import React from 'react'
import EmergenciasResponsive from './EmergenciasResponsive'

const Emergencias = () => {
	return (
		<>
			<div className='join hidden md:block m-0 mx-auto '>
				<button className='btn join-item'>Emergencias 1</button>
				<button className='btn join-item'>Emergencias 2</button>
				<button className='btn join-item'>Emergencias 3</button>
				<button className='btn join-item'>Emergencias 4</button>
				<button className='btn join-item'>Emergencias 5</button>
				<button className='btn join-item'>Emergencias 6</button>
				<button className='btn join-item'>Emergencias 7</button>
				<button className='btn join-item'>Emergencias 8</button>
			</div>
			<EmergenciasResponsive />
		</>
	)
}

export default Emergencias
