'use client'

import {usePathname} from 'next/navigation'
import {projectRoutes} from '@/entities/Project/lib/routes'
import {
	IconClock,
	IconStar,
	IconTrash,
	IconUsers,
	SelectList,
	Stack,
	Title,
} from '@/shared/ui'
import {type SelectListItem} from '@/shared/ui/SelectList/SelectList'

const categoryItems: SelectListItem[] = [
	{
		id: 'recent',
		label: 'Недавние',
		icon: <IconClock size={16} />,
		href: projectRoutes.recent(),
	},
	{
		id: 'favorites',
		label: 'Избранное',
		icon: <IconStar size={16} />,
		href: projectRoutes.favourite(),
	},
	{
		id: 'shared',
		label: 'Доступные мне',
		icon: <IconUsers size={16} />,
		href: projectRoutes.shared(),
	},
	{
		id: 'trash',
		label: 'Корзина',
		icon: <IconTrash size={16} />,
		href: projectRoutes.trash(),
	},
]

function ProjectsCategories() {
	const pathname = usePathname()

	const getSelectedId = () => {
		if (pathname === '/projects/recent') {
			return 'recent'
		}
		if (pathname === '/projects/favourite') {
			return 'favorites'
		}
		if (pathname === '/projects/shared') {
			return 'shared'
		}
		if (pathname === '/projects/trash') {
			return 'trash'
		}
		return undefined
	}

	return (
		<Stack gap={12}>
			<Title
				order={4}
				color="primary"
			>
				{'Проекты'}
			</Title>
			<SelectList
				items={categoryItems}
				selectedId={getSelectedId()}
				variant="subtle"
				size="md"
			/>
		</Stack>
	)
}

export {
	ProjectsCategories,
}
