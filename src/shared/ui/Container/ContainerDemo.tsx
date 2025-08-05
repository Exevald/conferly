import {radius} from '../design-system'
import {colors} from '../design-system/colors'
import {Box} from '@/shared/ui/Box/Box'
import {Container} from '@/shared/ui/Container/Container'
import {Stack} from '@/shared/ui/Stack/Stack'
import {Text} from '@/shared/ui/Text/Text'
import {Title} from '@/shared/ui/Title/Title'

function ContainerDemo() {
	const boxStyle = {
		backgroundColor: colors.background.secondary,
		padding: '16px',
		borderRadius: radius.md,
	}

	return (
		<Stack gap="lg">
			<Title order={4}>{'Размеры'}</Title>
			<Stack gap="md">
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
