import {
	Stack,
	Text,
	Title,
} from '@/shared/ui'

function TextDemo() {
	return (
		<Stack gap={16}>
			<Title order={4}>{'Размеры'}</Title>
			<Stack gap={8}>
				<Text size="xs">{'Extra Small Text'}</Text>
				<Text size="sm">{'Small Text'}</Text>
				<Text size="md">{'Medium Text'}</Text>
				<Text size="lg">{'Large Text'}</Text>
				<Text size="xl">{'Extra Large Text'}</Text>
			</Stack>
			<Title order={4}>{'Цвета'}</Title>
			<Stack gap={8}>
				<Text color="primary">{'Primary Text'}</Text>
				<Text color="secondary">{'Secondary Text'}</Text>
				<Text color="muted">{'Muted Text'}</Text>
			</Stack>
		</Stack>
	)
}

export {
	TextDemo,
}
