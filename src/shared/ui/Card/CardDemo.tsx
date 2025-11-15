import {
	Card,
	Stack,
	Text,
	Title,
} from '@/shared/ui'

function CardDemo() {
	return (
		<Stack gap={16}>
			<Title order={4}>{'Базовый (с границами)'}</Title>
			<Card>
				<Text>{'Это базовая карточка с содержимым'}</Text>
			</Card>
			<Title order={4}>{'Без границ'}</Title>
			<Card
				withBorder={false}
				shadow={undefined}
			>
				<Text>{'Карточка без границ и теней'}</Text>
			</Card>
			<Title order={4}>{'С заголовком'}</Title>
			<Card>
				<Title order={3}>{'Заголовок карточки'}</Title>
				<Text>{'Содержимое карточки с заголовком'}</Text>
			</Card>
			<Title order={4}>{'Разные тени'}</Title>
			<Stack gap={12}>
				<Card shadow="xs">
					<Text>{'Карточка с легкой тенью'}</Text>
				</Card>
				<Card shadow="md">
					<Text>{'Карточка со средней тенью'}</Text>
				</Card>
				<Card shadow="lg">
					<Text>{'Карточка с сильной тенью'}</Text>
				</Card>
			</Stack>
			<Title order={4}>{'Разные закругления'}</Title>
			<Stack gap={12}>
				<Card radius="xs">
					<Text>{'Маленькие закругления'}</Text>
				</Card>
				<Card radius="sm">
					<Text>{'Небольшие закругления'}</Text>
				</Card>
				<Card radius="md">
					<Text>{'Средние закругления'}</Text>
				</Card>
				<Card radius="lg">
					<Text>{'Большие закругления (по умолчанию)'}</Text>
				</Card>
				<Card radius="xl">
					<Text>{'Очень большие закругления'}</Text>
				</Card>
				<Card radius="2xl">
					<Text>{'Огромные закругления'}</Text>
				</Card>
				<Card radius="3xl">
					<Text>{'Максимальные закругления'}</Text>
				</Card>
				<Card radius="4xl">
					<Text>{'Экстремальные закругления'}</Text>
				</Card>
			</Stack>
		</Stack>
	)
}

export {
	CardDemo,
}
