import {
	Box,
	Group,
	Title,
} from '@mantine/core'
import Link from 'next/link'
import {Button} from '@/shared/ui/Button/Button'
import {Container} from '@/shared/ui/Container/Container'
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
							{'Conferly'}
						</Title>
					</Link>
					<Group gap="md">
						<Button
							href="/auth"
							variant="subtle"
							size="md"
						>
							{'Войти'}
						</Button>
						<Button
							href="/auth?mode=register"
							variant="primary"
							size="md"
						>
							{'Регистрация'}
						</Button>
					</Group>
				</Group>
			</Container>
		</Box>
	)
}

export default Header
