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
	},
	{
		id: 'favorites',
		label: 'Избранное',
		icon: <IconStar size={16} />,
	},
	{
		id: 'shared',
		label: 'Доступные мне',
		icon: <IconUsers size={16} />,
	},
	{
		id: 'trash',
		label: 'Корзина',
		icon: <IconTrash size={16} />,
	},
]

function ProjectsCategories() {
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
				variant="subtle"
				size="md"
			/>
		</Stack>
	)
}

export {
	ProjectsCategories,
}
