// Social Links
// ------------
// Description: The social links data for the website.

export interface SocialLink {
	name: string
	link: string
	icon: string
}

export const socialURLs = {
	whatsapp: 'https://wa.link/g7i77s',
	instagram: 'https://www.instagram.com/comunidadew_/',
	youtube: 'https://www.youtube.com/@Estrellaswbc'
}

export const socialLinks: SocialLink[] = [
	{
		name: 'WhatsApp',
		link: socialURLs.whatsapp,
		icon: 'whatsapp-icon'
	},
	{
		name: 'Instagram',
		link: socialURLs.instagram,
		icon: 'instagram-icon'
	},
	{
		name: 'Youtube',
		link: socialURLs.youtube,
		icon: 'yt-icon'
	}
]
