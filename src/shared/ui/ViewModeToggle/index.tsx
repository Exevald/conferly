import {
	Button,
	Group,
	Tooltip,
} from '@mantine/core'
import {
	IconGrid3x3,
	IconLayoutRows,
	IconList,
} from '@tabler/icons-react'
import {colors} from '@/shared/ui/design-system'

const SHOW_GRID_THRESHOLD = 3
const SHOW_LIST_THRESHOLD = 6

type ViewMode = 'grid' | 'list' | 'rows'

type ViewModeToggleProps = {
	viewMode: ViewMode,
	onViewModeChange: (mode: ViewMode) => void,
	eventCount: number,
}

function ViewModeToggle({
	viewMode,
	onViewModeChange,
	eventCount,
}: ViewModeToggleProps) {
	const canShowGrid = eventCount >= SHOW_GRID_THRESHOLD
	const canShowList = eventCount >= SHOW_LIST_THRESHOLD

	return (
		<Group gap="xs">
			<Tooltip
				label="Сетка"
				disabled={!canShowGrid}
			>
				<Button
					variant={viewMode === 'grid'
						? 'filled'
						: 'subtle'}
					size="sm"
					onClick={() => onViewModeChange('grid')}
					disabled={!canShowGrid}
					bg={viewMode === 'grid'
						? colors.primary
						: undefined}
					style={{
						minWidth: '36px',
						padding: '0',
					}}
				>
					<IconGrid3x3 size={16} />
				</Button>
			</Tooltip>
			<Tooltip
				label="Столбец"
			>
				<Button
					variant={viewMode === 'rows'
						? 'filled'
						: 'subtle'}
					size="sm"
					onClick={() => onViewModeChange('rows')}
					bg={viewMode === 'rows'
						? colors.primary
						: undefined}
					style={{
						minWidth: '36px',
						padding: '0',
					}}
				>
					<IconLayoutRows size={16} />
				</Button>
			</Tooltip>
			<Tooltip
				label="Список"
				disabled={!canShowList}
			>
				<Button
					variant={viewMode === 'list'
						? 'filled'
						: 'subtle'}
					size="sm"
					onClick={() => onViewModeChange('list')}
					disabled={!canShowList}
					bg={viewMode === 'list'
						? colors.primary
						: undefined}
					style={{
						minWidth: '36px',
						padding: '0',
					}}
				>
					<IconList size={16} />
				</Button>
			</Tooltip>
		</Group>
	)
}

export {
	type ViewMode,
	ViewModeToggle,
}
