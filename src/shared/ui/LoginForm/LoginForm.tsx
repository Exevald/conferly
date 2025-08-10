import Link from 'next/link'
import {colors} from '../design-system'
import styles from './LoginForm.module.css'
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

function LoginForm() {
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
					{'Вход в систему'}
				</Title>
				<form>
					<Stack gap="md">
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
						<Button
							type="submit"
							variant="primary"
							fullWidth={true}
							size="md"
						>
							{'Войти'}
						</Button>
						<Text
							size="sm"
							color="secondary"
							align="center"
						>
							{'Нет аккаунта?'}
							{' '}
							<Anchor
								href="/auth?mode=register"
								color={colors.text.primary}
							>
								{'Зарегистрироваться'}
							</Anchor>
						</Text>
					</Stack>
				</form>
			</Paper>
		</Center>
	)
}

export {
	LoginForm,
}
