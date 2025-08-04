import {type ReactNode, useState} from 'react'
import styles from './Tooltip.module.css'

type TooltipPosition = 'top' | 'bottom' | 'left' | 'right'

type TooltipProps = {
	children: ReactNode,
	content: ReactNode,
	position?: TooltipPosition,
	disabled?: boolean,
	delay?: number,
	className?: string,
}

function Tooltip({
	children,
	content,
	position = 'top',
	disabled = false,
	delay = 200,
	className = '',
}: TooltipProps) {
	const [isVisible, setIsVisible] = useState(false)
	const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null)

	const handleMouseEnter = () => {
		if (disabled) {
			return
		}

		const id = setTimeout(() => {
			setIsVisible(true)
		}, delay)

		setTimeoutId(id)
	}

	const handleMouseLeave = () => {
		if (timeoutId) {
			clearTimeout(timeoutId)
		}
		setIsVisible(false)
	}

	return (
		<div
			className={`${styles.tooltip} ${className}`}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			{children}
			{isVisible && (
				<div className={`${styles.tooltipContent} ${styles[`tooltip--${position}`]}`}>
					{content}
				</div>
			)}
		</div>
	)
}

export {
	Tooltip,
	type TooltipProps,
	type TooltipPosition,
}
