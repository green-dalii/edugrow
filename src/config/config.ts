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
	siteTitle: '予果予实（EDUGROW）| 专业留学规划与成长陪伴服务',
	siteDescription:
		'予果予实（EDUGROW）是专注于提供全流程留学规划与成长陪伴的专业机构，由三位资深顾问组成，为中国学子提供个性化留学方案，覆盖美英澳加新港等主流留学国家，助力实现全球名校梦想。',
	ogImage: '/og.jpg',
	logo: {
		src: '/logo.svg',
		alt: 'EDUGROW 予果予实留学'
	},
	canonical: true,
	noindex: false,
	mode: 'auto',
	scrollAnimations: true
}
