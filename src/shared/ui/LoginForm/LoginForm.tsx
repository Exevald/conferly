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
} from '@mantine/core'
import Link from 'next/link'
import styles from './LoginForm.module.css'
import {colors} from '@/shared/ui/design-system'

function LoginForm() {
	return (
		<Center className={styles.container}>
			<Paper
				shadow="md"
				p="xl"
				radius="md"
				withBorder={true}
				className={styles.paper}
			>
				<Title
					order={2}
					ta="center"
					mb="lg"
					c={colors.text.primary}
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
							fullWidth={true}
							size="md"
							bg={colors.primary}
						>
							{'Войти'}
						</Button>
						<Text
							ta="center"
							size="sm"
							c={colors.text.secondary}
						>
							{'Нет аккаунта?'}
							{' '}
							<Anchor
								component={Link}
								href="/auth?mode=register"
								c={colors.text.primary}
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
