import {
	delay,
	getAllMockProjects,
	getMockProject,
} from '../lib/mocks'
import {type Project} from '../model/types'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '/api'

const USE_MOCKS = process.env.NODE_ENV === 'development' || !process.env.NEXT_PUBLIC_API_URL

async function fetchProject(id: string): Promise<Project | null> {
	if (USE_MOCKS) {
		await delay(100)
		return getMockProject(id)
	}

	const response = await fetch(`${API_BASE_URL}/projects/${id}`, {
		headers: {
			'Content-Type': 'application/json',
		},
	})

	if (!response.ok) {
		return null
	}

	return response.json()
}

async function fetchProjects(): Promise<Project[]> {
	if (USE_MOCKS) {
		await delay(100)
		return getAllMockProjects()
	}

	const response = await fetch(`${API_BASE_URL}/projects`, {
		headers: {
			'Content-Type': 'application/json',
		},
	})

	if (!response.ok) {
		return []
	}

	return response.json()
}

async function createProject(data: Omit<Project, 'id' | 'createdAt' | 'updatedAt'>): Promise<Project> {
	const response = await fetch(`${API_BASE_URL}/projects`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	})

	if (!response.ok) {
		throw new Error('Failed to create project')
	}

	return response.json()
}

async function updateProject(id: string, data: Partial<Project>): Promise<Project> {
	const response = await fetch(`${API_BASE_URL}/projects/${id}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	})

	if (!response.ok) {
		throw new Error('Failed to update project')
	}

	return response.json()
}

async function deleteProject(id: string): Promise<void> {
	const response = await fetch(`${API_BASE_URL}/projects/${id}`, {
		method: 'DELETE',
	})

	if (!response.ok) {
		throw new Error('Failed to delete project')
	}
}

export {
	fetchProject,
	fetchProjects,
	createProject,
	updateProject,
	deleteProject,
}

