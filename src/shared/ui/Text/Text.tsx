import {type ReactNode} from 'react'
import {joinStyles} from '@/shared/utils/joinStyles'
import styles from './Text.module.css'

type TextSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
type TextColor = 'primary' | 'secondary' | 'muted' | 'inherit'

type TextProps = {
	children: ReactNode,
	size?: TextSize,
	color?: TextColor,
	align?: 'left' | 'center' | 'right',
	maxWidth?: number | string,
	margin?: string,
	className?: string,
	lineClamp?: number,
}

function Text({
	children,
	size = 'md',
	color = 'primary',
	align = 'left',
	maxWidth,
	margin,
	className = '',
	lineClamp,
}: TextProps) {
	const textClasses = joinStyles(
		styles.text,
		styles[`text--${size}`],
		styles[`text--${color}`],
		align !== 'left' && styles[`text--${align}`],
		lineClamp && styles[`text--clamp-${lineClamp}`],
		className,
	)

	const style = {
		maxWidth: maxWidth
			? (typeof maxWidth === 'number'
				? `${maxWidth}px`
				: maxWidth)
			: undefined,
		margin,
	}

	return (
		<div
			className={textClasses}
			style={style}
		>
			{children}
		</div>
	)
}

export {
	Text,
	type TextProps,
	type TextSize,
	type TextColor,
}
