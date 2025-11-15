import {type ReactNode} from 'react'
import styles from './Box.module.css'
import {joinStyles} from '@/shared/utils/joinStyles'

type BoxProps = {
	children: ReactNode,
	component?: 'div' | 'header' | 'main' | 'section' | 'article' | 'aside' | 'nav' | 'footer',
	className?: string,
	style?: React.CSSProperties,
	py?: number | string,
	px?: number | string,
	bg?: string,
	c?: string,
}

function Box({
	children,
	component = 'div',
	className = '',
	style,
	py,
	px,
	bg,
	c,
}: BoxProps) {
	const inlineStyles: React.CSSProperties = {}

	if (py !== undefined) {
		inlineStyles.paddingTop = py
		inlineStyles.paddingBottom = py
	}

	if (px !== undefined) {
		inlineStyles.paddingLeft = px
		inlineStyles.paddingRight = px
	}

	const boxClasses = joinStyles(
		styles.box,
		className,
	)

	const boxStyle = {
		backgroundColor: bg,
		color: c,
		...inlineStyles,
		...style,
	}

	const Component = component as any

	return (
		<Component
			className={boxClasses}
			style={boxStyle}
		>
			{children}
		</Component>
	)
}

export {
	Box,
	type BoxProps,
}
