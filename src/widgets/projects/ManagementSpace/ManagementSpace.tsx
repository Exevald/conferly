import {TopBar} from './view/TopBar/TopBar'
import {Container, Stack} from '@/shared/ui'

function ManagementSpace() {
	return (
		<Container
			size="lg"
			py={48}
			px={48}
		>
			<Stack gap={24}>
				<TopBar />
			</Stack>
		</Container>
	)
}

export {
	ManagementSpace,
}
