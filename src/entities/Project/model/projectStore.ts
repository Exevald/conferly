import {create} from 'zustand'
import {type Project} from './types'

type ProjectStore = {
	currentProjectId: string | null,
	setCurrentProjectId: (id: string | null) => void,
}

const useProjectStore = create<ProjectStore>(set => ({
	currentProjectId: null,
	setCurrentProjectId: id => {
		set({currentProjectId: id})
	},
}))

export {
	useProjectStore,
}
