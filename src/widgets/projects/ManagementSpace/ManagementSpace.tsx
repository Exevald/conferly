import {TopBar} from './view/TopBar/TopBar'
import {Container, Stack} from '@/shared/ui'

function ManagementSpace() {
	return (
		<Container
			size="lg"
			py="xl"
		>
			<Stack gap="xl">
				<TopBar />
			</Stack>
		</Container>
	)
}

export {
	ManagementSpace,
}
