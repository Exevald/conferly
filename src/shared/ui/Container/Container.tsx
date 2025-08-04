import {type ReactNode} from 'react'
import styles from './Container.module.css'

type ContainerSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

type ContainerProps = {
	children: ReactNode,
	size?: ContainerSize,
	className?: string,
	/** vertical padding */
	py?: 'xs' | 'sm' | 'md' | 'lg' | 'xl',
	/** horizontal padding */
	px?: 'xs' | 'sm' | 'md' | 'lg' | 'xl',
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
	const containerClasses = [
		styles.container,
		styles[`container--${size}`],
		py && styles[`container--py-${py}`],
		px && styles[`container--px-${px}`],
		className,
	].filter(Boolean).join(' ')

	const style = {
		flex,
	}

	return (
		<div
			className={containerClasses}
			style={style}
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
