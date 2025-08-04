import {Button, Tooltip} from '@mantine/core'
import {type ReactNode} from 'react'
import styles from './ViewModeToggle.module.css'
import {colors} from '@/shared/ui/design-system'

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
			label={label}
			disabled={disabled}
		>
			<Button
				variant={isActive
					? 'filled'
					: 'subtle'}
				size="sm"
				onClick={onClick}
				disabled={disabled || isPending}
				bg={isActive
					? colors.primary
					: undefined}
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
