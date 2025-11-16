import {
	createProject,
	deleteProject,
	fetchProject,
	fetchProjects,
	updateProject,
} from './api/projectApi'
import {useProject, useProjects} from './api/useProjectQueries'
import {CATEGORY_ROUTES, projectRoutes} from './lib/routes'
import {useProjectStore} from './model/projectStore'
import {type Project} from './model/types'

export {
	type Project,
	useProjectStore,
	useProject,
	useProjects,
	fetchProject,
	fetchProjects,
	createProject,
	updateProject,
	deleteProject,
	CATEGORY_ROUTES,
	projectRoutes,
}
