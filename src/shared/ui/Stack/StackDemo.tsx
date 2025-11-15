import {colors} from '../design-system/colors'
import {
	Box,
	Stack,
	Title,
} from '@/shared/ui'

function StackDemo() {
	const elemStyle = {
		backgroundColor: colors.background.secondary,
		padding: '8px',
	}

	return (
		<Stack gap={16}>
			<Title order={4}>{'Вертикальное расположение'}</Title>
			<Stack gap={8}>
				<Box style={elemStyle}>{'Элемент 1'}</Box>
				<Box style={elemStyle}>{'Элемент 2'}</Box>
				<Box style={elemStyle}>{'Элемент 3'}</Box>
			</Stack>
			<Title order={4}>{'Разные отступы'}</Title>
			<Stack gap={4}>
				<Box style={elemStyle}>{'Gap XS'}</Box>
				<Box style={elemStyle}>{'Gap XS'}</Box>
			</Stack>
			<Stack gap={8}>
				<Box style={elemStyle}>{'Gap SM'}</Box>
				<Box style={elemStyle}>{'Gap SM'}</Box>
			</Stack>
			<Stack gap={12}>
				<Box style={elemStyle}>{'Gap MD'}</Box>
				<Box style={elemStyle}>{'Gap MD'}</Box>
			</Stack>
			<Stack gap={16}>
				<Box style={elemStyle}>{'Gap LG'}</Box>
				<Box style={elemStyle}>{'Gap LG'}</Box>
			</Stack>
			<Stack gap={24}>
				<Box style={elemStyle}>{'Gap XL'}</Box>
				<Box style={elemStyle}>{'Gap XL'}</Box>
			</Stack>
			<Title order={4}>{'Выравнивание'}</Title>
			<Stack gap={8}>
				<Stack
					gap={8}
					align="flex-start"
				>
					<Box style={elemStyle}>{'Align Start'}</Box>
					<Box style={elemStyle}>{'Align Start'}</Box>
				</Stack>
				<Stack
					gap={8}
					align="center"
				>
					<Box style={elemStyle}>{'Align Center'}</Box>
					<Box style={elemStyle}>{'Align Center'}</Box>
				</Stack>
				<Stack
					gap={8}
					align="flex-end"
				>
					<Box style={elemStyle}>{'Align End'}</Box>
					<Box style={elemStyle}>{'Align End'}</Box>
				</Stack>
			</Stack>
		</Stack>
	)
}

export {
	StackDemo,
}
