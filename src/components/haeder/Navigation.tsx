import React, { useState } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import styled from 'styled-components'

const LINKS = [
	{ title: 'Home', link: 'home' },
	{ title: 'Portfolio', link: 'portfolio' },
	{ title: 'Shorts', link: 'shorts' },
	{ title: 'Services', link: 'services' },
	{ title: 'About', link: 'about' },
	{ title: 'Contact', link: 'contact' }
]

const NavWrapper = styled.nav<{ open: boolean }>`
	position: absolute;
	left: 50%;
	transform: translateX(-50%);

	@media (max-width: 768px) {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;

		background: rgba(0, 0, 0, 0.6);
		backdrop-filter: blur(10px);

		display: flex;
		justify-content: center;
		align-items: center;
		transition: all 0.4s ease;

		opacity: ${({ open }) => (open ? 1 : 0)};
		transform: ${({ open }) => (open ? 'translateY(0)' : 'translateY(-100%)')};
		pointer-events: ${({ open }) => (open ? 'all' : 'none')};
	}
`

const NavList = styled.ul`
	list-style: none;
	display: flex;
	gap: 5.813rem;
	margin: 0;
	padding: 0;

	@media (max-width: 1200px) {
		gap: 4rem;
	}

	@media (max-width: 1024px) {
		gap: 2.5rem;
	}

	@media (max-width: 768px) {
		flex-direction: column;
		gap: 40px;
	}
`

const NavItem = styled.li``

const NavLink = styled(ScrollLink)`
	color: #fff;
	font-family: Montserrat;
	font-size: 22px;
	font-weight: 300;
	cursor: pointer;
	transition: color 0.2s ease;

	&:hover {
		color: #b98b56;
	}

	@media (max-width: 1200px) {
		font-size: 20px;
	}

	@media (max-width: 1024px) {
		font-size: 18px;
	}

	@media (max-width: 768px) {
		font-size: 26px;
	}
`

const Burger = styled.div<{ open: boolean }>`
	display: none;

	@media (max-width: 768px) {
		display: block;
		width: 30px;
		height: 22px;
		position: relative;
		cursor: pointer;
		z-index: 20;

		span {
			position: absolute;
			width: 100%;
			height: 3px;
			background: #fff;
			left: 0;
			transition: all 0.3s ease;
		}

		span:nth-child(1) {
			top: ${({ open }) => (open ? '10px' : '0')};
			transform: ${({ open }) => (open ? 'rotate(45deg)' : 'none')};
		}

		span:nth-child(2) {
			top: 10px;
			opacity: ${({ open }) => (open ? 0 : 1)};
		}

		span:nth-child(3) {
			top: ${({ open }) => (open ? '10px' : '20px')};
			transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'none')};
		}
	}
`

export const Navigation: React.FC = () => {
	const [open, setOpen] = useState(false)

	return (
		<>
			<Burger
				open={open}
				onClick={() => setOpen(!open)}
			>
				<span />
				<span />
				<span />
			</Burger>

			<NavWrapper open={open}>
				<NavList>
					{LINKS.map(({ title, link }, i) => (
						<NavItem key={i}>
							<NavLink
								to={link}
								smooth={true}
								duration={1200}
								offset={-80}
								onClick={() => setOpen(false)}
							>
								{title}
							</NavLink>
						</NavItem>
					))}
				</NavList>
			</NavWrapper>
		</>
	)
}
