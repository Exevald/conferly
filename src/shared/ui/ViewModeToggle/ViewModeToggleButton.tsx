import {type ReactNode} from 'react'
import styles from './ViewModeToggle.module.css'
import {Button, Tooltip} from '@/shared/ui'

type ViewModeToggleButtonProps = {
	mode: string,
	currentViewMode: string,
	icon: ReactNode,
	label: string,
	onClick: () => void,
	disabled?: boolean,
	isPending?: boolean,
}

function ViewModeToggleButton({
	mode,
	currentViewMode,
	icon,
	label,
	onClick,
	disabled = false,
	isPending = false,
}: ViewModeToggleButtonProps) {
	const isActive = currentViewMode === mode

	return (
		<Tooltip
			content={label}
			position="bottom"
			disabled={!disabled}
		>
			<Button
				variant={isActive
					? 'primary'
					: 'secondary'}
				size="sm"
				onClick={onClick}
				disabled={disabled || isPending}
				className={styles.toggleButton}
			>
				{isPending && isActive
					? (
						<div className={styles.loadingSpinner} />
					)
					: (
						icon
					)}
			</Button>
		</Tooltip>
	)
}

export {
	ViewModeToggleButton,
}
