import {useQuery} from '@tanstack/react-query'
import {fetchProject, fetchProjects} from './projectApi'

function useProject(id?: string) {
	return useQuery({
		queryKey: ['project', id],
		queryFn: () => fetchProject(id!),
		enabled: !!id,
	})
}

function useProjects() {
	return useQuery({
		queryKey: ['projects'],
		queryFn: fetchProjects,
	})
}

export {
	useProject,
	useProjects,
}
