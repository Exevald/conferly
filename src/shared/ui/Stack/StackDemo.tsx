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
			<Title order={2}>
				{'Stack - Вертикальное расположение'}
			</Title>
			<Stack gap="sm">
				<Box style={elemStyle}>{'Элемент 1'}</Box>
				<Box style={elemStyle}>{'Элемент 2'}</Box>
				<Box style={elemStyle}>{'Элемент 3'}</Box>
			</Stack>
		</Stack>
	)
}

export {
	StackDemo,
}
