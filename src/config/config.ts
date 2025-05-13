// Config
// ------------
// Description: The configuration file for the website.

export interface Logo {
	src: string
	alt: string
}

export type Mode = 'auto' | 'light' | 'dark'

export interface Config {
	siteTitle: string
	siteDescription: string
	ogImage: string
	logo: Logo
	canonical: boolean
	noindex: boolean
	mode: Mode
	scrollAnimations: boolean
}

export const configData: Config = {
	siteTitle: 'Estrellas Webcam',
	siteDescription:
		'Estrellas Webcam es una empresa de asesoria y monetización de webcams. Te ayudamos a crecer y monetizar tu contenido.',
	ogImage: '/og.jpeg',
	logo: {
		src: '/logo-ew-simple.svg',
		alt: 'Estrellas Webcam. logo'
	},
	canonical: true,
	noindex: false,
	mode: 'auto',
	scrollAnimations: true
}
