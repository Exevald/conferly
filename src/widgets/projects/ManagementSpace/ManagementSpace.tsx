'use client'

import {TopBar} from './view/TopBar/TopBar'
import {useProject} from '@/entities/Project'
import {Container, Stack} from '@/shared/ui'

type ManagementSpaceProps = {
	projectId?: string,
}

function ManagementSpace({projectId}: ManagementSpaceProps) {
	const {
		data: project,
		isLoading,
	} = useProject(projectId)

	return (
		<Container
			size="lg"
			py={48}
			px={48}
		>
			<Stack gap={24}>
				<TopBar
					project={project ?? null}
					loading={isLoading}
				/>
			</Stack>
		</Container>
	)
}

export {
	ManagementSpace,
}
