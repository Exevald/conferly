import Link from 'next/link'
import {Group, Title, Button, Container, Box} from '@mantine/core'
import {colors} from '@/shared/ui/design-system'

function Header() {
    return (
        <Box
            component="header"
            py="md"
            bg={colors.background.primary}
            c={colors.text.primary}
            style={{borderBottom: `1px solid ${colors.border.light}`}}
        >
            <Container size="lg">
                <Group
                    justify="space-between"
                    align="center"
                >
                    <Link
                        href="/"
                        style={{textDecoration: 'none', color: 'inherit'}}
                    >
                        <Title
                            order={1}
                            size="h3"
                            c={colors.text.primary}
                        >
                            Conferly
                        </Title>
                    </Link>
                    
                    <Group gap="md">
                        <Button
                            component={Link}
                            href="/auth"
                            variant="subtle"
                            size="sm"
                            c={colors.text.primary}
                        >
                            Войти
                        </Button>
                        <Button 
                            component={Link}
                            href="/auth/register"
                            variant="filled"
                            size="sm"
                            bg={colors.primary}
                        >
                            Регистрация
                        </Button>
                    </Group>
                </Group>
            </Container>
        </Box>
    )
}

export default Header 