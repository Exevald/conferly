'use client'

import {usePathname} from 'next/navigation'
import {useMemo} from 'react'
import {
	CATEGORY_ROUTES,
	projectRoutes,
	useProjects,
} from '@/entities/Project'
import {
	Group,
	IconPlus,
	SelectList,
	Stack,
	Title,
} from '@/shared/ui'
import {type SelectListItem} from '@/shared/ui/SelectList/SelectList'

function ProjectList() {
	const pathname = usePathname()
	const {data: projects = []} = useProjects()

	const projectItems: SelectListItem[] = useMemo(
		() => projects.map(project => ({
			id: project.id,
			label: project.name,
			href: projectRoutes.detail(project.id),
		})),
		[projects],
	)

	const selectedId = useMemo(() => {
		const projectIdMatch = pathname.match(/^\/projects\/([^/]+)$/)
		if (!projectIdMatch) {
			return undefined
		}

		const projectId = projectIdMatch[1]
		const isCategory = CATEGORY_ROUTES.includes(projectId as typeof CATEGORY_ROUTES[number])

		return isCategory
			? undefined
			: projectId
	}, [pathname])

	return (
		<Stack gap={12}>
			<Group
				justify="apart"
				align="center"
			>
				<Title
					order={4}
					color="primary"
				>
					{'Список проектов'}
				</Title>
				<IconPlus size={16} />
			</Group>
			<SelectList
				items={projectItems}
				selectedId={selectedId}
				variant="subtle"
			/>
		</Stack>
	)
}

export {
	ProjectList,
}
