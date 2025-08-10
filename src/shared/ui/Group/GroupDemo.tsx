import {
	Button,
	Group,
	Stack,
	Title,
} from '@/shared/ui'

function GroupDemo() {
	return (
		<Stack gap="lg">
			<Title order={4}>{'Горизонтальное расположение'}</Title>
			<Group>
				<Button variant="primary">{'Кнопка 1'}</Button>
				<Button variant="secondary">{'Кнопка 2'}</Button>
				<Button variant="subtle">{'Кнопка 3'}</Button>
			</Group>
			<Title order={4}>{'Разные отступы'}</Title>
			<Stack gap="sm">
				<Group gap="xs">
					<Button size="sm">{'XS Gap'}</Button>
					<Button size="sm">{'XS Gap'}</Button>
				</Group>
				<Group gap="sm">
					<Button size="sm">{'SM Gap'}</Button>
					<Button size="sm">{'SM Gap'}</Button>
				</Group>
				<Group gap="md">
					<Button size="sm">{'MD Gap'}</Button>
					<Button size="sm">{'MD Gap'}</Button>
				</Group>
				<Group gap="lg">
					<Button size="sm">{'LG Gap'}</Button>
					<Button size="sm">{'LG Gap'}</Button>
				</Group>
			</Stack>
			<Title order={4}>{'Выравнивание'}</Title>
			<Stack gap="sm">
				<Group
					gap="sm"
					justify="left"
				>
					<Button size="sm">{'Left'}</Button>
					<Button size="sm">{'Left'}</Button>
				</Group>
				<Group
					gap="sm"
					justify="center"
				>
					<Button size="sm">{'Center'}</Button>
					<Button size="sm">{'Center'}</Button>
				</Group>
				<Group
					gap="sm"
					justify="right"
				>
					<Button size="sm">{'Right'}</Button>
					<Button size="sm">{'Right'}</Button>
				</Group>
			</Stack>
		</Stack>
	)
}

export {
	GroupDemo,
}
