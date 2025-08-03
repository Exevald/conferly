import Link from 'next/link'
import {TextInput, PasswordInput, Button, Paper, Title, Text, Stack, Anchor, Container} from '@mantine/core'

function RegisterPage() {
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
                    c="#323537"
                >
                    Регистрация
                </Title>
                
                <form>
                    <Stack gap="md">
                        <TextInput
                            label="Имя"
                            placeholder="Ваше имя"
                            required
                        />
                        
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
                        
                        <PasswordInput
                            label="Подтвердите пароль"
                            placeholder="Повторите пароль"
                            required
                        />
                        
                        <Button
                            type="submit"
                            fullWidth
                            size="md"
                            bg="orange.6"
                        >
                            Зарегистрироваться
                        </Button>
                        
                        <Text
                            ta="center"
                            size="sm"
                            c="dimmed"
                        >
                            Уже есть аккаунт?{' '}
                            <Anchor
                                component={Link}
                                href="/auth"
                                c="#323537"
                            >
                                Войти
                            </Anchor>
                        </Text>
                    </Stack>
                </form>
            </Paper>
        </Container>
    )
}

export default RegisterPage 