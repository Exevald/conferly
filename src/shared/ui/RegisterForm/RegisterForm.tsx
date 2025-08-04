import {
	Anchor,
	Center,
	Paper,
	PasswordInput,
	Stack,
	Text,
	TextInput,
	Title,
} from '@mantine/core'
import Link from 'next/link'
import styles from './RegisterForm.module.css'
import {Button} from '@/shared/ui/Button/Button'
import {colors} from '@/shared/ui/design-system'

function RegisterForm() {
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
					{'Регистрация\r'}
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
							ta="center"
							size="sm"
							c={colors.text.secondary}
						>
							{'Уже есть аккаунт?'}
							{' '}
							<Anchor
								component={Link}
								href="/auth?mode=login"
								c={colors.text.primary}
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
