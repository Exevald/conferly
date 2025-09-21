'use client'

import {useState} from 'react'
import {type SelectListItem} from './SelectList'
import {
	IconCalendar,
	IconClock,
	IconFolder,
	IconStar,
	IconTrash,
	IconUsers,
	SelectList,
	Stack,
	Text,
	Title,
} from '@/shared/ui'

const demoItems: SelectListItem[] = [
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

const projectItems: SelectListItem[] = [
	{
		id: 'project1',
		label: 'Веб-разработка 1 курс',
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

function SelectListDemo() {
	const [selectedCategory, setSelectedCategory] = useState('recent')
	const [selectedProject, setSelectedProject] = useState('work')

	return (
		<Stack gap="xl">
			<Stack gap="lg">
				<Title order={3}>{'Категории проектов'}</Title>
				<SelectList
					items={demoItems}
					selectedId={selectedCategory}
					onSelect={setSelectedCategory}
					variant="subtle"
					size="md"
				/>
				<Text
					size="sm"
					color="secondary"
				>{'Выбрано: '}{selectedCategory}</Text>
			</Stack>
			<Stack gap="lg">
				<Title order={3}>{'Список проектов'}</Title>
				<SelectList
					items={projectItems}
					selectedId={selectedProject}
					onSelect={setSelectedProject}
					variant="default"
					size="sm"
				/>
				<Text
					size="sm"
					color="secondary"
				>{'Выбрано: '}{selectedProject}</Text>
			</Stack>
			<Stack gap="lg">
				<Title order={3}>{'Разные размеры'}</Title>
				<Stack gap="md">
					<Text size="sm">{'Маленький (sm):'}</Text>
					<SelectList
						items={demoItems.slice(0, 2)}
						size="sm"
						variant="subtle"
					/>
				</Stack>
				<Stack gap="md">
					<Text size="sm">{'Средний (md):'}</Text>
					<SelectList
						items={demoItems.slice(0, 2)}
						size="md"
						variant="subtle"
					/>
				</Stack>
				<Stack gap="md">
					<Text size="sm">{'Большой (lg):'}</Text>
					<SelectList
						items={demoItems.slice(0, 2)}
						size="lg"
						variant="subtle"
					/>
				</Stack>
			</Stack>
		</Stack>
	)
}

export {SelectListDemo}
