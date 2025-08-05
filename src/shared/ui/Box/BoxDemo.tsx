import {colors} from '../design-system/colors'
import {Box} from '@/shared/ui/Box/Box'
import {Stack} from '@/shared/ui/Stack/Stack'
import {Text} from '@/shared/ui/Text/Text'
import {Title} from '@/shared/ui/Title/Title'

function BoxDemo() {
	return (
		<Stack gap="lg">
			<Title order={2}>{'Box - Базовый контейнер'}</Title>
			<Box
				style={{
					backgroundColor: colors.background.secondary,
					border: `1px solid ${colors.border.light}`,
					padding: '16px',
				}}
			>
				<Text>{'Контент внутри Box'}</Text>
			</Box>
		</Stack>
	)
}

export {
	BoxDemo,
}
