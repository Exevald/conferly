import Link from 'next/link'
import styles from './RegisterForm.module.css'
import {Anchor} from '@/shared/ui/Anchor/Anchor'
import {Button} from '@/shared/ui/Button/Button'
import {Center} from '@/shared/ui/Center/Center'
import {colors} from '@/shared/ui/design-system'
import {Paper} from '@/shared/ui/Paper/Paper'
import {PasswordInput} from '@/shared/ui/PasswordInput/PasswordInput'
import {Stack} from '@/shared/ui/Stack/Stack'
import {Text} from '@/shared/ui/Text/Text'
import {TextInput} from '@/shared/ui/TextInput/TextInput'
import {Title} from '@/shared/ui/Title/Title'

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
