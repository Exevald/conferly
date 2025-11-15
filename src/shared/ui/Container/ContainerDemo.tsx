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
				<Container size="xs">
					<Box
						style={boxStyle}
					>
						<Text>{'Контейнер XS'}</Text>
					</Box>
				</Container>
				<Container size="sm">
					<Box
						style={boxStyle}
					>
						<Text>{'Контейнер SM'}</Text>
					</Box>
				</Container>
				<Container size="md">
					<Box
						style={boxStyle}
					>
						<Text>{'Контейнер MD'}</Text>
					</Box>
				</Container>
				<Container size="lg">
					<Box
						style={boxStyle}
					>
						<Text>{'Контейнер LG'}</Text>
					</Box>
				</Container>
				<Container size="xl">
					<Box
						style={boxStyle}
					>
						<Text>{'Контейнер XL'}</Text>
					</Box>
				</Container>
			</Stack>
		</Stack>
	)
}

export {
	ContainerDemo,
}
