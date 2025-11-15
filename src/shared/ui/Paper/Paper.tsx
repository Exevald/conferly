import {type ReactNode} from 'react'
import styles from './Paper.module.css'
import {joinStyles} from '@/shared/utils/joinStyles'

type PaperPadding = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
type PaperRadius = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'

type PaperProps = {
	children: ReactNode,
	padding?: PaperPadding,
	radius?: PaperRadius,
	withBorder?: boolean,
	shadow?: 'xs' | 'sm' | 'md' | 'lg' | 'xl',
	className?: string,
	style?: React.CSSProperties,
}

function Paper({
	children,
	padding = 'md',
	radius = 'md',
	withBorder = false,
	shadow,
	className = '',
	style,
}: PaperProps) {
	const paperClasses = joinStyles(
		styles.paper,
		styles[`paper--padding-${padding}`],
		styles[`paper--radius-${radius}`],
		withBorder && styles['paper--withBorder'],
		shadow && styles[`paper--shadow-${shadow}`],
		className,
	)

	return (
		<div
			className={paperClasses}
			style={style}
		>
			{children}
		</div>
	)
}

export {
	Paper,
	type PaperProps,
	type PaperPadding,
	type PaperRadius,
}
