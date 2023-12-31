import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: 'https://www.globalfood.site',
			lastModified: new Date(),
			changeFrequency: 'daily',
			priority: 1,
		},
		{
			url: 'https://www.globalfood.site/recetas',
			lastModified: new Date(),
			changeFrequency: 'daily',
			priority: 0.9,
		},
		{
			url: 'https://www.globalfood.site/paises',
			lastModified: new Date(),
			changeFrequency: 'daily',
			priority: 0.8,
		},
	]
}
