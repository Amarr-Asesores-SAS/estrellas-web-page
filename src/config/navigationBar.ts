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
		{ name: 'Aliados', link: '/aliados' },
		{
			name: 'Mas',
			link: '#',
			submenu: [
				{ name: 'Blog', link: '/blog' },
				{ name: 'Familia Estrellas Webcam', link: '/familia' },
				{ name: 'Beneficios', link: '/beneficios' },
				{ name: 'Planes', link: '/planes' }
			]
		},
		{ name: 'Contacto', link: socialURLs.whatsapp, target: '_blank' }
	],
	navActions: [
		{ name: 'SIGW', link: 'https://www.mistudiowebcam.com/sigw/', style: 'primary', size: 'lg' }
	]
}
