import {radius} from '../design-system'
import {colors} from '../design-system/colors'
import {
	Box,
	Container,
	Stack,
	Text,
	Title,
} from '@/shared/ui'

function ContainerDemo() {
	const boxStyle = {
		backgroundColor: colors.background.secondary,
		padding: '16px',
		borderRadius: radius.md,
	}

	return (
		<Stack gap={16}>
			<Title order={4}>{'Размеры'}</Title>
			<Stack gap={12}>
				<Container maxWidth={576}>
					<Box
						style={boxStyle}
					>
						<Text>{'Контейнер 576px'}</Text>
					</Box>
				</Container>
				<Container maxWidth={768}>
					<Box
						style={boxStyle}
					>
						<Text>{'Контейнер 768px'}</Text>
					</Box>
				</Container>
				<Container maxWidth={992}>
					<Box
						style={boxStyle}
					>
						<Text>{'Контейнер 992px'}</Text>
					</Box>
				</Container>
				<Container maxWidth={1200}>
					<Box
						style={boxStyle}
					>
						<Text>{'Контейнер 1200px'}</Text>
					</Box>
				</Container>
				<Container maxWidth={1400}>
					<Box
						style={boxStyle}
					>
						<Text>{'Контейнер 1400px'}</Text>
					</Box>
				</Container>
			</Stack>
		</Stack>
	)
}

export {
	ContainerDemo,
}
