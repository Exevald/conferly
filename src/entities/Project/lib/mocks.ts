import {type Project} from '../model/types'

const mockProjects: Record<string, Project> = {
	project1: {
		id: 'project1',
		name: 'Веб-разработка 1 курс (2 семестр)',
		description: 'Проект для изучения веб-разработки',
		ownerId: 'user1',
		createdAt: '2024-01-15T10:00:00Z',
		updatedAt: '2024-03-20T14:30:00Z',
	},
	project2: {
		id: 'project2',
		name: 'Институт',
		description: 'Проект для институтских мероприятий',
		ownerId: 'user1',
		createdAt: '2024-02-01T09:00:00Z',
		updatedAt: '2024-03-18T16:45:00Z',
	},
	project3: {
		id: 'project3',
		name: 'Личное',
		description: 'Личные проекты и заметки',
		ownerId: 'user1',
		createdAt: '2024-01-10T08:00:00Z',
		updatedAt: '2024-03-19T12:20:00Z',
	},
	project4: {
		id: 'project4',
		name: 'Марафон по веб-разработке',
		description: 'Организация марафона по веб-разработке',
		ownerId: 'user1',
		createdAt: '2024-02-15T11:00:00Z',
		updatedAt: '2024-03-21T10:15:00Z',
	},
	project5: {
		id: 'project5',
		name: 'Погружение в программирование',
		description: 'Курс по программированию для начинающих',
		ownerId: 'user1',
		createdAt: '2024-01-20T13:00:00Z',
		updatedAt: '2024-03-22T09:30:00Z',
	},
	work: {
		id: 'work',
		name: 'Работа',
		description: 'Рабочие проекты и задачи',
		ownerId: 'user1',
		createdAt: '2024-01-05T07:00:00Z',
		updatedAt: '2024-03-23T15:00:00Z',
	},
}

const delay = (ms: number = 100) => new Promise(resolve => setTimeout(resolve, ms))

const getAllMockProjects = (): Project[] => Object.values(mockProjects)

const getMockProject = (id: string): Project | null => mockProjects[id] || null

export {
	delay,
	getAllMockProjects,
	getMockProject,
	mockProjects,
}
