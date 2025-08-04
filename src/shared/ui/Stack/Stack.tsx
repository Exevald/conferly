import {type ReactNode} from 'react'
import styles from './Stack.module.css'

type StackGap = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
type StackAlign = 'stretch' | 'center' | 'flex-start' | 'flex-end'
type StackJustify = 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around'

type StackProps = {
	children: ReactNode,
	gap?: StackGap,
	align?: StackAlign,
	justify?: StackJustify,
	className?: string,
	textAlign?: 'left' | 'center' | 'right',
}

function Stack({
	children,
	gap = 'md',
	align = 'stretch',
	justify = 'flex-start',
	className = '',
	textAlign,
}: StackProps) {
	const stackClasses = [
		styles.stack,
		styles[`stack--gap-${gap}`],
		styles[`stack--align-${align}`],
		styles[`stack--justify-${justify}`],
		textAlign && styles[`stack--text-${textAlign}`],
		className,
	].filter(Boolean).join(' ')

	return (
		<div className={stackClasses}>
			{children}
		</div>
	)
}

export {
	Stack,
	type StackProps,
	type StackGap,
	type StackAlign,
	type StackJustify,
}
