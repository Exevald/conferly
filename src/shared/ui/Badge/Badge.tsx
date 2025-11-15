import {type ReactNode} from 'react'
import {joinStyles} from '@/shared/utils/joinStyles'
import styles from './Badge.module.css'

type BadgeColor = 'gray' | 'red' | 'blue' | 'green' | 'orange'
type BadgeSize = 'xs' | 'sm' | 'md' | 'lg'

type BadgeProps = {
	children: ReactNode,
	color?: BadgeColor,
	size?: BadgeSize,
	className?: string,
}

function Badge({
	children,
	color = 'gray',
	size = 'sm',
	className = '',
}: BadgeProps) {
	const badgeClasses = joinStyles(
		styles.badge,
		styles[`badge--${color}`],
		styles[`badge--${size}`],
		className,
	)

	return (
		<span className={badgeClasses}>
			{children}
		</span>
	)
}

export {
	Badge,
	type BadgeProps,
	type BadgeColor,
	type BadgeSize,
}
