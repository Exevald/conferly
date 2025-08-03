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
import {colors} from '@/shared/ui/design-system'

function LoginPage() {
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
					c={colors.text.primary}
				>
					{'Вход в систему\r'}
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
							{'Войти\r'}
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
								href="/auth/register"
								c={colors.text.primary}
							>
								{'Зарегистрироваться\r'}
							</Anchor>
						</Text>
					</Stack>
				</form>
			</Paper>
		</Container>
	)
}

export default LoginPage
