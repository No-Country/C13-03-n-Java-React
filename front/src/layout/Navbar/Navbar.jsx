import React from 'react'

const Navbar = () => {
	return (
		<nav className='bg-base-300 md:flex md:items-center md:justify-between rounded-xl mb-5'>
			<div className='flex justify-between items-center'>
				<div>
					<a className='btn btn-ghost normal-case text-xl'>farmacias</a>
				</div>

				<span className='text-3xl cursor-pointer mx-2 md:hidden block'>
					<ion-icon
						name='menu'
						onclick='Menu(this)'
					></ion-icon>
				</span>
			</div>
			<ul className='md:flex md:items-center z-[-1] md:z-auto md:static absolute  w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500'>
				<li className='mx-4 my-6 md:my-0'>
					<a
						href='#'
						className='text-xl hover:text-cyan-500 duration-500'
					>
						home{' '}
					</a>
				</li>
				<li className='mx-4 my-6 md:my-0'>
					<a
						href='#'
						className='text-xl hover:text-cyan-500 duration-500'
					>
						contacto
					</a>
				</li>
				<li className='mx-4 my-6 md:my-0'>
					<a
						href='#'
						className='text-xl hover:text-cyan-500 duration-500'
					>
						login
					</a>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar
