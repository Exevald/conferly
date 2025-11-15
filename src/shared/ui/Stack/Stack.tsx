import {type ReactNode} from 'react'
import {joinStyles} from '@/shared/utils/joinStyles'
import styles from './Stack.module.css'

type StackAlign = 'stretch' | 'center' | 'flex-start' | 'flex-end'
type StackJustify = 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around'

type StackProps = {
	children: ReactNode,
	gap?: number | string,
	align?: StackAlign,
	justify?: StackJustify,
	className?: string,
	textAlign?: 'left' | 'center' | 'right',
	/** vertical padding */
	py?: number | string,
	/** horizontal padding */
	px?: number | string,
	/** top padding */
	pt?: number | string,
	/** bottom padding */
	pb?: number | string,
	/** left padding */
	pl?: number | string,
	/** right padding */
	pr?: number | string,
}

function Stack({
	children,
	gap = 12,
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
	const inlineStyles: React.CSSProperties = {}

	if (gap !== undefined) {
		inlineStyles.gap = gap
	}

	if (py !== undefined && pt === undefined && pb === undefined) {
		inlineStyles.paddingTop = py
		inlineStyles.paddingBottom = py
	}
	else {
		if (pt !== undefined) {
			inlineStyles.paddingTop = pt
		}
		if (pb !== undefined) {
			inlineStyles.paddingBottom = pb
		}
	}

	if (px !== undefined && pl === undefined && pr === undefined) {
		inlineStyles.paddingLeft = px
		inlineStyles.paddingRight = px
	}
	else {
		if (pl !== undefined) {
			inlineStyles.paddingLeft = pl
		}
		if (pr !== undefined) {
			inlineStyles.paddingRight = pr
		}
	}

	const stackClasses = joinStyles(
		styles.stack,
		styles[`stack--align-${align}`],
		styles[`stack--justify-${justify}`],
		textAlign && styles[`stack--text-${textAlign}`],
		className,
	)

	return (
		<div
			className={stackClasses}
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
	Stack,
	type StackProps,
	type StackAlign,
	type StackJustify,
}
