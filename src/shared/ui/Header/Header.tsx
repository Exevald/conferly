import Link from 'next/link'
import {Box} from '@/shared/ui/Box/Box'
import {Button} from '@/shared/ui/Button/Button'
import {Container} from '@/shared/ui/Container/Container'
import {colors} from '@/shared/ui/design-system'
import {Group} from '@/shared/ui/Group/Group'
import {Title} from '@/shared/ui/Title/Title'

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
					justify="apart"
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
							color="primary"
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
