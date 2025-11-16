'use client'

import {usePathname} from 'next/navigation'
import {type PropsWithChildren, useMemo} from 'react'
import {TopBar} from './view/TopBar/TopBar'
import {CATEGORY_ROUTES, useProject} from '@/entities/Project'
import {Container, Stack} from '@/shared/ui'

function ManagementSpace({children}: PropsWithChildren) {
	const pathname = usePathname()

	const projectId = useMemo(() => {
		const match = pathname.match(/^\/projects\/([^/]+)$/)
		if (!match) {
			return undefined
		}

		const id = match[1]
		const isCategory = CATEGORY_ROUTES.includes(id as typeof CATEGORY_ROUTES[number])

		return isCategory
			? undefined
			: id
	}, [pathname])

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
				{children}
			</Stack>
		</Container>
	)
}

export {
	ManagementSpace,
}
