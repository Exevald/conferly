import {colors} from '../design-system/colors'
import {Box} from '@/shared/ui/Box/Box'
import {Stack} from '@/shared/ui/Stack/Stack'
import {Title} from '@/shared/ui/Title/Title'

function StackDemo() {
	const elemStyle = {
		backgroundColor: colors.background.secondary,
		padding: '8px',
	}

	return (
		<Stack gap="lg">
			<Title order={4}>{'Вертикальное расположение'}</Title>
			<Stack gap="sm">
				<Box style={elemStyle}>{'Элемент 1'}</Box>
				<Box style={elemStyle}>{'Элемент 2'}</Box>
				<Box style={elemStyle}>{'Элемент 3'}</Box>
			</Stack>
			<Title order={4}>{'Разные отступы'}</Title>
			<Stack gap="xs">
				<Box style={elemStyle}>{'Gap XS'}</Box>
				<Box style={elemStyle}>{'Gap XS'}</Box>
			</Stack>
			<Stack gap="sm">
				<Box style={elemStyle}>{'Gap SM'}</Box>
				<Box style={elemStyle}>{'Gap SM'}</Box>
			</Stack>
			<Stack gap="md">
				<Box style={elemStyle}>{'Gap MD'}</Box>
				<Box style={elemStyle}>{'Gap MD'}</Box>
			</Stack>
			<Stack gap="lg">
				<Box style={elemStyle}>{'Gap LG'}</Box>
				<Box style={elemStyle}>{'Gap LG'}</Box>
			</Stack>
			<Stack gap="xl">
				<Box style={elemStyle}>{'Gap XL'}</Box>
				<Box style={elemStyle}>{'Gap XL'}</Box>
			</Stack>
			<Title order={4}>{'Выравнивание'}</Title>
			<Stack gap="sm">
				<Stack
					gap="sm"
					align="flex-start"
				>
					<Box style={elemStyle}>{'Align Start'}</Box>
					<Box style={elemStyle}>{'Align Start'}</Box>
				</Stack>
				<Stack
					gap="sm"
					align="center"
				>
					<Box style={elemStyle}>{'Align Center'}</Box>
					<Box style={elemStyle}>{'Align Center'}</Box>
				</Stack>
				<Stack
					gap="sm"
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
