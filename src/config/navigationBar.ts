// Navigation Bar
// ------------

import { socialURLs } from '@/config/socialLinks'

// Description: The navigation bar data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface NavSubItem {
	name: string
	link: string
}

export interface NavItem {
	name: string
	link: string
	submenu?: NavSubItem[]
	target?: '_blank' | '_self'
}

export interface NavAction {
	name: string
	link: string
	style: string
	size: string
}

export interface NavData {
	logo: Logo
	navItems: NavItem[]
	navActions: NavAction[]
}

export const navigationBarData: NavData = {
	logo: {
		src: '/logo-ew.svg',
		alt: 'The tailwind astro theme',
		text: ''
	},
	navItems: [
		{ name: 'Inicio', link: '/' },
		{ name: 'Conócenos', link: '/conocenos' },
		{ name: 'Capacitaciones', link: '/capacitaciones' },
		{
			name: 'Mas',
			link: '#',
			submenu: [
				{ name: 'Planes', link: '/planes' },
				{ name: 'Descargas', link: '/descargas' },
				{ name: 'Familia Estrellas Webcam', link: '/familia' },
				{ name: 'Beneficios', link: '/beneficios' }
			]
		},
		{ name: 'Contacto', link: socialURLs.whatsapp, target: '_blank' }
	],
	navActions: [
		{ name: 'SIGW', link: 'https://www.mistudiowebcam.com/sigw/', style: 'primary', size: 'lg' }
	]
}
