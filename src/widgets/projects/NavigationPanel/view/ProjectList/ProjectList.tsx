import {
	Group,
	IconCalendar,
	IconFolder,
	IconPlus,
	SelectList,
	Stack,
	Title,
} from '@/shared/ui'
import {type SelectListItem} from '@/shared/ui/SelectList/SelectList'

const projectItems: SelectListItem[] = [
	{
		id: 'project1',
		label: 'Веб-разработка 1 курс (2...',
		icon: <IconFolder size={16} />,
	},
	{
		id: 'project2',
		label: 'Институт',
		icon: <IconFolder size={16} />,
	},
	{
		id: 'project3',
		label: 'Личное',
		icon: <IconFolder size={16} />,
	},
	{
		id: 'project4',
		label: 'Марафон по веб-разработке',
		icon: <IconFolder size={16} />,
	},
	{
		id: 'project5',
		label: 'Погружение в программирование',
		icon: <IconFolder size={16} />,
	},
	{
		id: 'work',
		label: 'Работа',
		icon: <IconCalendar size={16} />,
	},
]

function ProjectList() {
	return (
		<Stack gap={12}>
			<Group
				justify="apart"
				align="center"
			>
				<Title
					order={4}
					color="primary"
				>{'Список проектов'}</Title>
				<IconPlus size={16} />
			</Group>
			<SelectList
				items={projectItems}
				selectedId="work"
				variant="subtle"
				size="sm"
			/>
		</Stack>
	)
}

export {
	ProjectList,
}
