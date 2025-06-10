// Footer Navigation
// ------------

// Configs

import { socialURLs } from './socialLinks'

// Description: The footer navigation data for the website.

export interface Logo {
	src: string
	alt: string
	text: string
}

export interface FooterAbout {
	title: string
	aboutText: string
	logo: Logo
}

export interface SubCategory {
	subCategory: string
	subCategoryLink: string
}

export interface FooterColumn {
	category: string
	subCategories: SubCategory[]
}

export interface SubFooter {
	copywriteText: string
}

export interface FooterData {
	footerAbout: FooterAbout
	footerColumns: FooterColumn[]
	subFooter: SubFooter
}

export const footerNavigationData: FooterData = {
	footerAbout: {
		title: 'Estrellas Webcam.',
		aboutText: 'Somo una galaxia de estrellas que se unen para crear un universo de oportunidades',
		logo: {
			src: '/logo-ew-simple.svg',
			alt: 'Estrellas Webcam',
			text: 'Estrellas Webcam.'
		}
	},
	footerColumns: [
		{
			category: 'Planes',
			subCategories: [
				{
					subCategory: 'Empresarial',
					subCategoryLink: '/empresarial'
				},
				{
					subCategory: 'otros',
					subCategoryLink: '/planes'
				}
			]
		},
		{
			category: 'Nosotros',
			subCategories: [
				{
					subCategory: 'Conócenos',
					subCategoryLink: '/conocenos'
				}
			]
		},
		{
			category: 'Estamos a un click',
			subCategories: [
				{
					subCategory: 'Escríbenos',
					subCategoryLink: socialURLs.whatsapp
				},
				{
					subCategory: 'Soporte',
					subCategoryLink: socialURLs.whatsapp
				},
				{
					subCategory: 'Únete',
					subCategoryLink: socialURLs.whatsapp
				}
			]
		}
	],
	subFooter: {
		copywriteText: '© Estrellas Webcam 2025.'
	}
}
