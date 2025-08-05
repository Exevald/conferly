import {type ReactNode} from 'react'
import styles from './Title.module.css'

type TitleOrder = 1 | 2 | 3 | 4 | 5 | 6
type TitleColor = 'primary' | 'secondary' | 'muted' | 'inherit'

type TitleProps = {
	children: ReactNode,
	order?: TitleOrder,
	color?: TitleColor,
	align?: 'left' | 'center' | 'right',
	maxWidth?: number | string,
	margin?: string,
	className?: string,
	lineClamp?: number,
}

function Title({
	children,
	order = 1,
	color = 'primary',
	align = 'left',
	maxWidth,
	margin,
	className = '',
	lineClamp,
}: TitleProps) {
	const size = `h${order}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

	const titleClasses = [
		styles.title,
		styles[`title--${size}`],
		styles[`title--${color}`],
		align !== 'left' && styles[`title--${align}`],
		lineClamp && styles[`title--clamp-${lineClamp}`],
		className,
	].filter(Boolean).join(' ')

	const style = {
		maxWidth: maxWidth
			? (typeof maxWidth === 'number'
				? `${maxWidth}px`
				: maxWidth)
			: undefined,
		margin,
	}

	const Component = `h${order}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

	return (
		<Component
			className={titleClasses}
			style={style}
		>
			{children}
		</Component>
	)
}

export {
	Title,
	type TitleProps,
	type TitleOrder,
	type TitleColor,
}
