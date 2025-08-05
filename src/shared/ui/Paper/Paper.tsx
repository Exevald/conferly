import {type ReactNode} from 'react'
import styles from './Paper.module.css'

type PaperRadius = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'

type PaperProps = {
	children: ReactNode,
	radius?: PaperRadius,
	className?: string,
	style?: React.CSSProperties,
}

function Paper({
	children,
	radius = 'md',
	className = '',
	style,
}: PaperProps) {
	const paperClasses = [
		styles.paper,
		styles[`paper--radius-${radius}`],
		className,
	].filter(Boolean).join(' ')

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
	type PaperRadius,
}
