import {radius} from '../design-system'
import {colors} from '../design-system/colors'
import {Box} from '@/shared/ui/Box/Box'
import {Container} from '@/shared/ui/Container/Container'
import {Stack} from '@/shared/ui/Stack/Stack'
import {Text} from '@/shared/ui/Text/Text'
import {Title} from '@/shared/ui/Title/Title'

function ContainerDemo() {
	return (
		<Stack gap="lg">
			<Title order={2}>{'Container - Базовый'}</Title>
			<Container>
				<Box
					style={{
						backgroundColor: colors.background.secondary,
						padding: '16px',
						borderRadius: radius.md,
					}}
				>
					<Text>{'Контент внутри контейнера'}</Text>
				</Box>
			</Container>
		</Stack>
	)
}

export {
	ContainerDemo,
}
