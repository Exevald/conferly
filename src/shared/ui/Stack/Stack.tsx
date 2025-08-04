import {type ReactNode} from 'react'
import styles from './Stack.module.css'

type StackGap = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
type StackAlign = 'stretch' | 'center' | 'flex-start' | 'flex-end'
type StackJustify = 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around'
type StackPadding = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

type StackProps = {
	children: ReactNode,
	gap?: StackGap,
	align?: StackAlign,
	justify?: StackJustify,
	className?: string,
	textAlign?: 'left' | 'center' | 'right',
	/** vertical padding */
	py?: StackPadding,
	/** horizontal padding */
	px?: StackPadding,
	/** top padding */
	pt?: StackPadding,
	/** bottom padding */
	pb?: StackPadding,
	/** left padding */
	pl?: StackPadding,
	/** right padding */
	pr?: StackPadding,
}

function Stack({
	children,
	gap = 'md',
	align = 'stretch',
	justify = 'flex-start',
	className = '',
	textAlign,
	py,
	px,
	pt,
	pb,
	pl,
	pr,
}: StackProps) {
	const stackClasses = [
		styles.stack,
		styles[`stack--gap-${gap}`],
		styles[`stack--align-${align}`],
		styles[`stack--justify-${justify}`],
		textAlign && styles[`stack--text-${textAlign}`],
		py && styles[`stack--py-${py}`],
		px && styles[`stack--px-${px}`],
		pt && styles[`stack--pt-${pt}`],
		pb && styles[`stack--pb-${pb}`],
		pl && styles[`stack--pl-${pl}`],
		pr && styles[`stack--pr-${pr}`],
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
	type StackPadding,
}
