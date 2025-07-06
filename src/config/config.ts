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
	siteTitle: '予果予实（EDUGROW）｜留学规划与成长陪伴',
	siteDescription:
		'予果予实（EDUGROW）——专注于留学规划与成长陪伴的专业机构，三位资深顾问团队，助力学子实现全球升学梦想。用心陪伴，成就未来。',
	ogImage: '/og.jpg',
	logo: {
		src: '/logo.svg',
		alt: 'EDUGROW logo'
	},
	canonical: true,
	noindex: false,
	mode: 'auto',
	scrollAnimations: true
}
