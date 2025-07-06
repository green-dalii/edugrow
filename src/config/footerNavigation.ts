// Footer Navigation
// ------------
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
	newTab?: string
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
		title: 'EDUGROW',
		aboutText:
			'予果予实（EDUGROW）专注于留学规划与成长陪伴，助力学子实现全球升学梦想。',
		logo: {
			src: '/logo_white.svg',
			alt: 'EDUGROW',
			text: '给予陪伴\t·\t给予成长\t·\t给予硕果累累'
		}
	},
	footerColumns: [
		{
			category: '留学相关',
			subCategories: [
				{
					subCategory: '留学服务',
					subCategoryLink: '/service'
				},
				{
					subCategory: '留学案例',
					subCategoryLink: '/cases'
				},
				{
					subCategory: '留学攻略',
					subCategoryLink: '/blog'
				},
			]
		},
		{
			category: '关于我们',
			subCategories: [
				{
					subCategory: '品牌故事',
					subCategoryLink: '/about#company-intro'
				},
				{
					subCategory: '团队成员',
					subCategoryLink: '/about#members'
				},
				{
					subCategory: '留学FAQ',
					subCategoryLink: '/faq'
				},
				{
					subCategory: '服务条款',
					subCategoryLink: '/terms'
				}
			]
		},
		{
			category: '联系我们',
			subCategories: [
				{
					subCategory: '联系方式',
					subCategoryLink: '/contact#contact-info'
				},
				{
					subCategory: '前往予果予实',
					subCategoryLink: '/contact#address'
				},

			]
		},
		{
			category: '友情链接',
			subCategories: [
				{
					subCategory: '官方留学学历学位认证',
					subCategoryLink: 'https://zwfw.cscse.edu.cn/cscse/lxfwzxwsfwdt2020/xlxwrz32/index.html',
					newTab: "_blank",
				},
				{
					subCategory: '教育部留学服务中心',
					subCategoryLink: 'https://portal.cscse.edu.cn/',
					newTab: "_blank",
				},
				{
					subCategory: '国家留学网',
					subCategoryLink: 'https://www.csc.edu.cn/',
					newTab: "_blank",
				},
			]
		}
	],
	subFooter: {
		copywriteText: `©${new Date().getFullYear()} EDUGROW.`
	}
}
