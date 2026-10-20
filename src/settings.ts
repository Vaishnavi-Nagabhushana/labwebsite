interface Profile {
	fullName: string
	title: string
	institute: string
	author_name: string
	research_areas: { title: string; description: string; field: string }[]
}

export const profile: Profile = {
	fullName: 'SustainAI Lab',
	title: '',
	institute: 'Mehta Family School of DS & AI, IIT Guwahati',
	author_name: 'A Borthakur', // Author name to be highlighted in the papers section
	research_areas: [
		{
			title: 'Embedded AI systems / Edge AI / TinyML',
			description:
				'Real-time AI systems that run efficiently on low-power edge and embedded devices.',
			field: 'engineering',
		},
		{
			title: 'Deep learning',
			description:
				'Data-driven models for vision, language, and sensory processing.',
			field: 'computer-science',
		},
		{
			title: 'Neuromorphic computing & engineering',
			description:
				'Brain-inspired algorithms and hardware for energy-efficient computation.',
			field: 'engineering',
		},
		{
			title: 'Human & Environment Friendly AI',
			description:
				'Sustainable AI that is optimal for both humans and the environment.',
			field: 'computer-science',
		},
		{
			title: 'Neuroscience',
			description:
				'Understanding biological intelligence to inspire better machine learning.',
			field: 'biology',
		},
	],
}

// Set equal to an empty string to hide the icon that you don't want to display
export const social = {
	email: 'ayon.borthakur@iitg.ac.in',
	linkedin: '',
	x: '',
	bluesky: '',
	github: '',
	gitlab: '',
	scholar: 'https://scholar.google.com/citations?hl=en&user=6msVyocAAAAJ',
	inspire: '',
	arxiv: '',
	orcid: '',
}

export const template = {
	website_url: 'https://localhost:4321', // Astro needs to know your site’s deployed URL to generate a sitemap. It must start with http:// or https://
	transitions: true,
	lightTheme: 'sustainlight', // Select one of the Daisy UI Themes or create your own
	darkTheme: 'dark', // Select one of the Daisy UI Themes or create your own
	excerptLength: 200,
	postPerPage: 5,
    base: '' // Repository name starting with /
}

export const seo = {
	default_title: 'SustainAI Lab',
	default_description:
		'We are a research lab at IIT Guwahati led by Dr. Ayon Borthakur, focusing on sustainable AI, data-driven decision-making, and interdisciplinary research at the intersection of technology and society.',
	default_image: '/lab_banner.png',
}
