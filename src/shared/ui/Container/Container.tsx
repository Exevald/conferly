import {type ReactNode} from 'react'
import styles from './Container.module.css'

type ContainerSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

type ContainerProps = {
	children: ReactNode,
	size?: ContainerSize,
	className?: string,
	/** vertical padding */
	py?: number | string,
	/** horizontal padding */
	px?: number | string,
	flex?: string,
}

function Container({
	children,
	size = 'lg',
	className = '',
	py,
	px,
	flex,
}: ContainerProps) {
	const inlineStyles: React.CSSProperties = {}

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

	const containerClasses = [
		styles.container,
		styles[`container--${size}`],
		className,
	].filter(Boolean).join(' ')

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
	type ContainerSize,
}
