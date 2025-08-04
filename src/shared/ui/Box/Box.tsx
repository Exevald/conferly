import {type ReactNode} from 'react'
import styles from './Box.module.css'

type BoxProps = {
	children: ReactNode,
	component?: 'div' | 'header' | 'main' | 'section' | 'article' | 'aside' | 'nav' | 'footer',
	className?: string,
	style?: React.CSSProperties,
	py?: 'xs' | 'sm' | 'md' | 'lg' | 'xl',
	px?: 'xs' | 'sm' | 'md' | 'lg' | 'xl',
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
	const boxClasses = [
		styles.box,
		py && styles[`box--py-${py}`],
		px && styles[`box--px-${px}`],
		className,
	].filter(Boolean).join(' ')

	const boxStyle = {
		backgroundColor: bg,
		color: c,
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
