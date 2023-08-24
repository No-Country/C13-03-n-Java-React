import React from 'react'

const Navbar = () => {
	return (
		<>
			<div className='navbar  bg-base-300 p-4 rounded-box lg:displey-flex flex-column mb-10'>
				<div className='flex-1 px-2 mx-2'>
					<span className='text-2xl font-bold '>Farmacias de Turno</span>
				</div>
				<div className='flex-none hidden px-2 mx-2 lg:flex'>
					<div className='flex items-stretch text-3xl '>
						<a
							className='btn btn-ghost btn-sm rounded-btn'
							href='#sobreMi'
						>
							Home
						</a>

						<a className='btn btn-ghost btn-sm rounded-btn'>Contacto</a>
						<a className='btn btn-ghost btn-sm rounded-btn'>Login</a>
					</div>
				</div>
				<div className='navbar-end lg:hidden '>
					<div className='dropdown dropdown-end '>
						<label
							tabIndex={0}
							className='btn btn-ghost btn-circle '
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-8 w-8'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M4 6h16M4 12h16M4 18h7'
								/>
							</svg>
						</label>
						<ul
							tabIndex={0}
							className='menu menu-sm dropdown-content mt-3 z-[1] p-2  bg-base-300 rounded-box w-52 text-center'
						>
							<li>
								<a
									className='btn btn-ghost btn-sm rounded-btn'
									href='#sobreMi'
								>
									Home
								</a>
							</li>
							<li>
								<a
									className='btn btn-ghost btn-sm rounded-btn'
									href='#proyectos'
								>
									contacto
								</a>
							</li>
							<li>
								<div className='btn btn-ghost btn-sm rounded-btn'>Login</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	)
}

export default Navbar
