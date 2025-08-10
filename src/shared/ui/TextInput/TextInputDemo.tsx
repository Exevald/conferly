import {
	Stack,
	TextInput,
	Title,
} from '@/shared/ui'

function TextInputDemo() {
	return (
		<Stack gap="lg">
			<Title order={4}>{'Базовый'}</Title>
			<TextInput placeholder="Введите текст" />
			<Title order={4}>{'С лейблом'}</Title>
			<TextInput
				label="Имя пользователя"
				placeholder="Введите имя"
			/>
			<Title order={4}>{'С ошибкой'}</Title>
			<TextInput
				label="Email"
				placeholder="Введите email"
				error="Неверный формат email"
			/>
			<Title order={4}>{'Размеры'}</Title>
			<Stack gap="sm">
				<TextInput
					size="xs"
					placeholder="Extra Small"
				/>
				<TextInput
					size="sm"
					placeholder="Small"
				/>
				<TextInput
					size="md"
					placeholder="Medium"
				/>
				<TextInput
					size="lg"
					placeholder="Large"
				/>
			</Stack>
		</Stack>
	)
}

export {
	TextInputDemo,
}
