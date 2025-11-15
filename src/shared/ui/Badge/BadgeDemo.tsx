import {
	Badge,
	Group,
	Stack,
	Title,
} from '@/shared/ui'


function BadgeDemo() {
	return (
		<Stack gap={16}>
			<Title order={4}>{'Цвета'}</Title>
			<Group>
				<Badge color="gray">{'Gray'}</Badge>
				<Badge color="red">{'Red'}</Badge>
				<Badge color="blue">{'Blue'}</Badge>
				<Badge color="green">{'Green'}</Badge>
				<Badge color="orange">{'Orange'}</Badge>
			</Group>
			<Title order={4}>{'Размеры'}</Title>
			<Group>
				<Badge size="xs">{'xsmall'}</Badge>
				<Badge size="sm">{'small'}</Badge>
				<Badge size="md">{'medium'}</Badge>
				<Badge size="lg">{'large large'}</Badge>
			</Group>
		</Stack>
	)
}

export {
	BadgeDemo,
}
