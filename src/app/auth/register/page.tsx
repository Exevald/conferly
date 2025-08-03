import {
	Anchor,
	Button,
	Container,
	Paper,
	PasswordInput,
	Stack,
	Text,
	TextInput,
	Title,
} from '@mantine/core'
import Link from 'next/link'

function RegisterPage() {
	return (
		<Container
			py="xl"
			style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				minHeight: '100%',
				flex: 1,
			}}
		>
			<Paper
				shadow="md"
				p="xl"
				radius="md"
				withBorder={true}
				style={{
					width: '100%',
					maxWidth: '400px',
				}}
			>
				<Title
					order={2}
					ta="center"
					mb="lg"
					c="#323537"
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
							fullWidth={true}
							size="md"
							bg="orange.6"
						>
							{'Зарегистрироваться'}
						</Button>
						<Text
							ta="center"
							size="sm"
							c="dimmed"
						>
							{'Уже есть аккаунт?'}
							{' '}
							<Anchor
								component={Link}
								href="/auth"
								c="#323537"
							>
								{'Войти'}
							</Anchor>
						</Text>
					</Stack>
				</form>
			</Paper>
		</Container>
	)
}

export default RegisterPage
