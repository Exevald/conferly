import {type ReactNode} from 'react'
import {joinStyles} from '@/shared/utils/joinStyles'
import styles from './Group.module.css'

type GroupPosition = 'left' | 'center' | 'right' | 'apart'
type GroupAlign = 'stretch' | 'center' | 'flex-start' | 'flex-end'

type GroupProps = {
	children: ReactNode,
	justify?: GroupPosition,
	align?: GroupAlign,
	gap?: number | string,
	className?: string,
	wrap?: boolean,
}

function Group({
	children,
	justify = 'left',
	align = 'stretch',
	gap = 12,
	className = '',
	wrap = false,
}: GroupProps) {
	const inlineStyles: React.CSSProperties = {}

	if (gap !== undefined) {
		inlineStyles.gap = gap
	}

	const groupClasses = joinStyles(
		styles.group,
		styles[`group--justify-${justify}`],
		styles[`group--align-${align}`],
		wrap && styles['group--wrap'],
		className,
	)

	return (
		<div
			className={groupClasses}
			style={
				Object.keys(inlineStyles).length > 0
					? inlineStyles
					: undefined
			}
		>
			{children}
		</div>
	)
}

export {
	Group,
	type GroupProps,
	type GroupPosition,
	type GroupAlign,
}
