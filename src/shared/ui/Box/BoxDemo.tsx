import {colors} from '../design-system/colors'
import {Box} from '@/shared/ui/Box/Box'
import {Stack} from '@/shared/ui/Stack/Stack'
import {Text} from '@/shared/ui/Text/Text'
import {Title} from '@/shared/ui/Title/Title'

function BoxDemo() {
	const boxStyle = {
		backgroundColor: colors.background.secondary,
		border: `1px solid ${colors.border.light}`,
	}

	return (
		<Stack gap="lg">
			<Title order={4}>{'Базовый контейнер'}</Title>
			<Box
				style={boxStyle}
			>
				<Text>{'Контент внутри Box'}</Text>
			</Box>
			<Title order={4}>{'Разные отступы'}</Title>
			<Stack gap="sm">
				<Box
					px="xs"
					py="xs"
					style={boxStyle}
				>
					<Text>{'Padding XS'}</Text>
				</Box>
				<Box
					px="sm"
					py="sm"
					style={boxStyle}
				>
					<Text>{'Padding SM'}</Text>
				</Box>
				<Box
					px="md"
					py="md"
					style={boxStyle}
				>
					<Text>{'Padding MD'}</Text>
				</Box>
				<Box
					px="lg"
					py="lg"
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
