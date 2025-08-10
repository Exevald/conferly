'use client'

import {useRouter, useSearchParams} from 'next/navigation'
import {useTransition} from 'react'
import {ViewModeToggleButton} from './ViewModeToggleButton'
import {Group} from '@/shared/ui'
import {
	IconGrid,
	IconList,
	IconRows,
} from '@/shared/ui/Icons/Icons'

const SHOW_GRID_THRESHOLD = 3
const SHOW_LIST_THRESHOLD = 6

type ViewMode = 'rows' | 'grid' | 'list'

type ViewModeToggleProps = {
	viewMode: ViewMode,
	eventCount: number,
}

function ViewModeToggle({
	viewMode,
	eventCount,
}: ViewModeToggleProps) {
	const router = useRouter()
	const searchParams = useSearchParams()
	const [isPending, startTransition] = useTransition()

	const canShowGrid = eventCount >= SHOW_GRID_THRESHOLD
	const canShowList = eventCount >= SHOW_LIST_THRESHOLD

	const handleModeChange = (mode: ViewMode) => {
		startTransition(() => {
			const params = new URLSearchParams(searchParams)
			params.set('view', mode)
			router.replace(`?${params.toString()}`)
		})
	}

	return (
		<Group gap="xs">
			<ViewModeToggleButton
				mode="rows"
				currentViewMode={viewMode}
				icon={<IconRows size={16} />}
				label="Столбец"
				onClick={() => handleModeChange('rows')}
				isPending={isPending}
			/>
			<ViewModeToggleButton
				mode="grid"
				currentViewMode={viewMode}
				icon={<IconGrid size={16} />}
				label="Сетка"
				onClick={() => handleModeChange('grid')}
				disabled={!canShowGrid}
				isPending={isPending}
			/>
			<ViewModeToggleButton
				mode="list"
				currentViewMode={viewMode}
				icon={<IconList size={16} />}
				label="Список"
				onClick={() => handleModeChange('list')}
				disabled={!canShowList}
				isPending={isPending}
			/>
		</Group>
	)
}

export {
	type ViewMode,
	ViewModeToggle,
}
