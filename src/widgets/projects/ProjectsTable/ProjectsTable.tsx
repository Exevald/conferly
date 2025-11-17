'use client'

import {useRouter} from 'next/navigation'
import {useMemo} from 'react'
import {useProjects} from '@/entities/Project'
import {projectRoutes} from '@/entities/Project/lib/routes'
import {type Project} from '@/entities/Project/model/types'
import {
	type TableColumn,
	Skeleton,
	Stack,
	Table,
	Text,
	Title,
} from '@/shared/ui'

const columns: readonly TableColumn<'name' | 'description' | 'updatedAt'>[] = [
	{
		id: 'name',
		label: 'Название',
		width: '2fr',
	},
	{
		id: 'description',
		label: 'Описание',
		width: '3fr',
	},
	{
		id: 'updatedAt',
		label: 'Обновлено',
		width: 200,
	},
]

type ProjectsTableProps = {
	title?: string,
	filter?: (project: Project) => boolean,
}

function ProjectsTable({title, filter}: ProjectsTableProps) {
	const router = useRouter()
	const {data: projects = [], isLoading} = useProjects()

	const filteredProjects = useMemo(() => {
		if (!filter) {
			return projects
		}
		return projects.filter(filter)
	}, [projects, filter])

	const handleRowClick = (project: Project) => {
		router.push(projectRoutes.detail(project.id))
	}

	const getCellData = (row: Project, columnId: 'name' | 'description' | 'updatedAt') => {
		if (columnId === 'updatedAt') {
			const value = row.updatedAt
			if (!value || typeof value !== 'string') {
				return (
					<Text
						size="sm"
						color="muted"
					>
						{'—'}
					</Text>
				)
			}
			const date = new Date(value)
			if (Number.isNaN(date.getTime())) {
				return (
					<Text
						size="sm"
						color="muted"
					>
						{'—'}
					</Text>
				)
			}
			return (
				<Text size="sm">
					{date.toLocaleDateString('ru-RU', {
						day: '2-digit',
						month: '2-digit',
						year: 'numeric',
					})}
				</Text>
			)
		}

		const value = row[columnId]
		return (
			<Text size="sm">
				{String(value ?? '')}
			</Text>
		)
	}

	if (isLoading) {
		return (
			<Stack gap={16}>
				{title && (
					<Title
						order={2}
						color="primary"
					>
						{title}
					</Title>
				)}
				<Stack gap={8}>
					<Skeleton height={48} />
					<Skeleton height={48} />
					<Skeleton height={48} />
				</Stack>
			</Stack>
		)
	}

	return (
		<Stack gap={16}>
			{title && (
				<Title
					order={2}
					color="primary"
				>
					{title}
				</Title>
			)}
			<Table
				rows={filteredProjects}
				getCellData={getCellData}
				columns={columns}
				onRowClick={handleRowClick}
				emptyState={{
					title: 'Нет проектов',
					description: 'Создайте новый проект, чтобы начать работу',
				}}
			/>
		</Stack>
	)
}

export {
	ProjectsTable,
}
