import {
	Group,
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
	},
	{
		id: 'project2',
		label: 'Институт',
	},
	{
		id: 'project3',
		label: 'Личное',
	},
	{
		id: 'project4',
		label: 'Марафон по веб-разработке',
	},
	{
		id: 'project5',
		label: 'Погружение в программирование',
	},
	{
		id: 'work',
		label: 'Работа',
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
				>
					{'Список проектов'}
				</Title>
				<IconPlus size={16} />
			</Group>
			<SelectList
				items={projectItems}
				selectedId="work"
				variant="subtle"
			/>
		</Stack>
	)
}

export {
	ProjectList,
}
