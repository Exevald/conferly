import {
	Box,
	Button,
	Container,
	Group,
	Title,
} from '@mantine/core'
import Link from 'next/link'
import {colors} from '@/shared/ui/design-system'

function Header() {
	return (
		<Box
			component="header"
			py="md"
			bg={colors.background.primary}
			c={colors.text.primary}
			style={{
				borderBottom: `1px solid ${colors.border.light}`,
			}}
		>
			<Container size="lg">
				<Group
					justify="space-between"
					align="center"
				>
					<Link
						href="/"
						style={{
							textDecoration: 'none',
							color: 'inherit',
						}}
					>
						<Title
							order={1}
							size="h3"
							c={colors.text.primary}
						>
							{'Conferly\r'}
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
							{'Войти\r'}
						</Button>
						<Button
							component={Link}
							href="/auth/register"
							variant="filled"
							size="sm"
							bg={colors.primary}
						>
							{'Регистрация\r'}
						</Button>
					</Group>
				</Group>
			</Container>
		</Box>
	)
}

export default Header
