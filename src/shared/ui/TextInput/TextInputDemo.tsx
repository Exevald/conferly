import {Stack} from '@/shared/ui/Stack/Stack'
import {TextInput} from '@/shared/ui/TextInput/TextInput'
import {Title} from '@/shared/ui/Title/Title'

function TextInputDemo() {
	return (
		<Stack gap="lg">
			<Title order={2}>{'TextInput - Базовый'}</Title>
			<TextInput placeholder="Введите текст" />
			<Title order={2}>{'TextInput - С лейблом'}</Title>
			<TextInput
				label="Имя пользователя"
				placeholder="Введите имя"
			/>
			<Title order={2}>{'TextInput - С ошибкой'}</Title>
			<TextInput
				label="Email"
				placeholder="Введите email"
				error="Неверный формат email"
			/>
			<Title order={2}>{'TextInput - Размеры'}</Title>
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
