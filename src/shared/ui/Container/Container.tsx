import {type ReactNode} from 'react'
import styles from './Container.module.css'
import {joinStyles} from '@/shared/utils/joinStyles'

type ContainerProps = {
	children: ReactNode,
	maxWidth?: number,
	className?: string,
	/** vertical padding */
	py?: number,
	/** horizontal padding */
	px?: number,
	flex?: string,
}

function Container({
	children,
	maxWidth = 1200,
	className = '',
	py,
	px,
	flex,
}: ContainerProps) {
	const inlineStyles: React.CSSProperties = {
		maxWidth,
	}

	if (py !== undefined) {
		inlineStyles.paddingTop = py
		inlineStyles.paddingBottom = py
	}

	if (px !== undefined) {
		inlineStyles.paddingLeft = px
		inlineStyles.paddingRight = px
	}

	if (flex !== undefined) {
		inlineStyles.flex = flex
	}

	const containerClasses = joinStyles(
		styles.container,
		className,
	)

	return (
		<div
			className={containerClasses}
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
	Container,
	type ContainerProps,
}
