import { useRef } from 'react'

function Tabs({ currentTab = true, setCurrentTab }) {

  const classNameTab1 = currentTab ? 'btn btn-active' : 'btn'
  const classNameTab2 = currentTab ? 'btn' : 'btn btn-active'

  const refTab1 = useRef(null);
  const refTab2 = useRef(null);

  const handleChange = (e) => {
    const target = e.target
    const current = refTab1.current

    if (target == current) {
      setCurrentTab(true)
    } else {
      setCurrentTab(false)
    }
  }

  return (
    <div className="mt-2 btn-group btn-group-vertical lg:btn-group-horizontal">
      <button
        className={classNameTab1}
        onClick={(e) => handleChange(e)}
        ref={refTab1}
      >
        Farmacia de turno
      </button>
      <button
        className={classNameTab2}
        onClick={(e) => handleChange(e)}
        ref={refTab2}
      >
        Todas las farmacias
      </button>
    </div>
  )
}

export default Tabs