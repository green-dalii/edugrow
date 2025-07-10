// Navigation Bar
// ------------
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
		src: '/logo_main.svg',
		alt: 'EDUGROW',
		text: ''
	},
	navItems: [
		{ name: '首页', link: '/' },
		{ name: '服务流程', link: '/service' },
		{
			name: "留学案例",
			link: "/cases"
		},
		// { name: '价格', link: '/pricing' },
		{
			name: '留学资源',
			link: '#',
			submenu: [
				{ name: '留学攻略', link: '/blog' },
				{ name: 'FAQ', link: '/faq' },
			]
		},
		{ name: '关于我们', link: '/about' },
		{ name: '联系我们', link: '/contact' },
	],
	navActions: [{ name: '立即咨询', link: '/', style: 'primary', size: 'base' }]
}
