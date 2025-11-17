import Link from 'next/link'
import {LAYOUT_CONSTANTS} from '../constants'
import {
	Box,
	Button,
	Container,
	Group,
	Title,
} from '@/shared/ui'
import {colors} from '@/shared/ui/design-system'

function Header() {
	return (
		<Box
			component="header"
			bg={colors.background.primary}
			c={colors.text.primary}
			style={{
				borderBottom: `1px solid ${colors.border.light}`,
				height: LAYOUT_CONSTANTS.HEADER_HEIGHT,
				display: 'flex',
				alignItems: 'center',
			}}
		>
			<div
				style={{
					width: '100%',
					paddingLeft: '5%',
					paddingRight: '5%',
				}}
			>
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
					<Group gap={12}>
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
			</div>
		</Box>
	)
}

export default Header
