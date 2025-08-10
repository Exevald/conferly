import Link from 'next/link'
import styles from './RegisterForm.module.css'
import {
	Anchor,
	Button,
	Center,
	Paper,
	PasswordInput,
	Stack,
	Text,
	TextInput,
	Title,
} from '@/shared/ui'
import {colors} from '@/shared/ui/design-system'

function RegisterForm() {
	return (
		<Center className={styles.container}>
			<Paper
				shadow="md"
				padding="xl"
				radius="md"
				withBorder={true}
				className={styles.paper}
			>
				<Title
					order={2}
					color="primary"
					align="center"
					margin="0 0 16px 0"
				>
					{'Регистрация'}
				</Title>
				<form>
					<Stack gap="md">
						<TextInput
							label="Имя"
							placeholder="Ваше имя"
							required={true}
						/>
						<TextInput
							label="Email"
							placeholder="example@email.com"
							required={true}
							type="email"
						/>
						<PasswordInput
							label="Пароль"
							placeholder="Введите пароль"
							required={true}
						/>
						<PasswordInput
							label="Подтвердите пароль"
							placeholder="Повторите пароль"
							required={true}
						/>
						<Button
							type="submit"
							variant="primary"
							fullWidth={true}
							size="md"
						>
							{'Зарегистрироваться'}
						</Button>
						<Text
							size="sm"
							color="secondary"
							align="center"
						>
							{'Уже есть аккаунт?'}
							{' '}
							<Anchor
								href="/auth?mode=login"
								color={colors.text.primary}
							>
								{'Войти'}
							</Anchor>
						</Text>
					</Stack>
				</form>
			</Paper>
		</Center>
	)
}

export {
	RegisterForm,
}
