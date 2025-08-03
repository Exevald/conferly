import Link from 'next/link'
import {TextInput, PasswordInput, Button, Paper, Title, Text, Stack, Anchor, Container} from '@mantine/core'
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
                flex: 1
            }}
        >
            <Paper
                shadow="md"
                p="xl"
                radius="md"
                withBorder
                style={{
                    width: '100%',
                    maxWidth: '400px'
                }}
            >
                <Title
                    order={2}
                    ta="center"
                    mb="lg"
                    c={colors.text.primary}
                >
                    Вход в систему
                </Title>
                <form>
                    <Stack gap="md">
                        <TextInput
                            label="Email"
                            placeholder="example@email.com"
                            required
                            type="email"
                        />
                        <PasswordInput
                            label="Пароль"
                            placeholder="Введите пароль"
                            required
                        />
                        <Button
                            type="submit"
                            fullWidth
                            size="md"
                            bg={colors.primary}
                        >
                            Войти
                        </Button>
                        <Text
                            ta="center"
                            size="sm"
                            c={colors.text.secondary}
                        >
                            Нет аккаунта?{' '}
                            <Anchor
                                component={Link}
                                href="/auth/register"
                                c={colors.text.primary}
                            >
                                Зарегистрироваться
                            </Anchor>
                        </Text>
                    </Stack>
                </form>
            </Paper>
        </Container>
    )
}

export default LoginPage 