const CATEGORY_ROUTES = [
	'recent',
	'favourite',
	'shared',
	'trash',
] as const

const projectRoutes = {
	detail: (id: string) => `/projects/${id}`,
	recent: () => '/projects/recent',
	favourite: () => '/projects/favourite',
	shared: () => '/projects/shared',
	trash: () => '/projects/trash',
} as const

export {
	CATEGORY_ROUTES,
	projectRoutes,
}
