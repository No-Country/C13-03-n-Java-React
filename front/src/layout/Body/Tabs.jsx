import { useRef } from 'react'

function Tabs({ currentTab = true, setCurrentTab }) {
	const classNameTab1 = currentTab
		? 'btn btn-active tab tab-sm tab-lifted tab-active'
		: 'btn tab tab-sm tab-lifted'
	const classNameTab2 = currentTab
		? 'btn tab tab-sm tab-lifted'
		: 'btn btn-active tab tab-sm tab-lifted tab-active'

	const refTab1 = useRef(null)
	const refTab2 = useRef(null)

	const handleChange = e => {
		const target = e.target
		const current = refTab1.current

		if (target == current) {
			setCurrentTab(true)
		} else {
			setCurrentTab(false)
		}
	}

	return (
		<div className='tabs mt-6 btn-group btn-group-horizontal'>
			<button
				className={classNameTab1}
				onClick={e => handleChange(e)}
				ref={refTab1}
			>
				Farmacia de turno
			</button>
			<button
				className={classNameTab2}
				onClick={e => handleChange(e)}
				ref={refTab2}
			>
				Todas las farmacias
			</button>
		</div>
	)
}

export default Tabs
