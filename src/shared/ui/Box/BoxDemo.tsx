import {colors} from '../design-system/colors'
import {
	Box,
	Stack,
	Text,
	Title,
} from '@/shared/ui'

function BoxDemo() {
	const boxStyle = {
		backgroundColor: colors.background.secondary,
		border: `1px solid ${colors.border.light}`,
	}

	return (
		<Stack gap={16}>
			<Title order={4}>{'Базовый контейнер'}</Title>
			<Box
				style={boxStyle}
			>
				<Text>{'Контент внутри Box'}</Text>
			</Box>
			<Title order={4}>{'Разные отступы'}</Title>
			<Stack gap={8}>
				<Box
					px={8}
					py={8}
					style={boxStyle}
				>
					<Text>{'Padding XS'}</Text>
				</Box>
				<Box
					px={16}
					py={16}
					style={boxStyle}
				>
					<Text>{'Padding SM'}</Text>
				</Box>
				<Box
					px={24}
					py={24}
					style={boxStyle}
				>
					<Text>{'Padding MD'}</Text>
				</Box>
				<Box
					px={32}
					py={32}
					style={boxStyle}
				>
					<Text>{'Padding LG'}</Text>
				</Box>
			</Stack>
		</Stack>
	)
}

export {
	BoxDemo,
}
