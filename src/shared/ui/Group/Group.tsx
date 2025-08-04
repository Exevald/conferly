import {type ReactNode} from 'react'
import styles from './Group.module.css'

type GroupPosition = 'left' | 'center' | 'right' | 'apart'
type GroupAlign = 'stretch' | 'center' | 'flex-start' | 'flex-end'

type GroupProps = {
	children: ReactNode,
	justify?: GroupPosition,
	align?: GroupAlign,
	gap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl',
	className?: string,
	wrap?: boolean,
}

function Group({
	children,
	justify = 'left',
	align = 'stretch',
	gap = 'md',
	className = '',
	wrap = false,
}: GroupProps) {
	const groupClasses = [
		styles.group,
		styles[`group--justify-${justify}`],
		styles[`group--align-${align}`],
		styles[`group--gap-${gap}`],
		wrap && styles['group--wrap'],
		className,
	].filter(Boolean).join(' ')

	return (
		<div className={groupClasses}>
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
