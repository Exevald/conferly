import Link from 'next/link'
import {type ReactNode} from 'react'
import styles from './Card.module.css'
import {joinStyles} from '@/shared/utils/joinStyles'

type CardPadding = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
type CardRadius = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'

type CardProps = {
	children: ReactNode,
	padding?: CardPadding,
	radius?: CardRadius,
	withBorder?: boolean,
	shadow?: 'xs' | 'sm' | 'md' | 'lg' | 'xl',
	className?: string,
	href?: string,
	style?: React.CSSProperties,
}

function Card({
	children,
	padding = 'md',
	radius = 'lg',
	withBorder = true,
	shadow = 'sm',
	className = '',
	href,
	style,
}: CardProps) {
	const cardClasses = joinStyles(
		styles.card,
		styles[`card--padding-${padding}`],
		styles[`card--radius-${radius}`],
		withBorder && styles['card--withBorder'],
		shadow && styles[`card--shadow-${shadow}`],
		className,
	)

	const cardStyle = {
		textDecoration: 'none',
		color: 'inherit',
		cursor: href
			? 'pointer'
			: 'default',
		...style,
	}

	if (href) {
		return (
			<Link
				href={href}
				className={cardClasses}
				style={cardStyle}
			>
				{children}
			</Link>
		)
	}

	return (
		<div
			className={cardClasses}
			style={style}
		>
			{children}
		</div>
	)
}

export {
	Card,
	type CardProps,
	type CardPadding,
	type CardRadius,
}
