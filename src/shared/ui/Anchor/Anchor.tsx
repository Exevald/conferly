import Link from 'next/link'
import {type ReactNode} from 'react'
import styles from './Anchor.module.css'

type AnchorProps = {
	children: ReactNode,
	href: string,
	className?: string,
	style?: React.CSSProperties,
	color?: string,
}

function Anchor({
	children,
	href,
	className = '',
	style,
	color,
}: AnchorProps) {
	const anchorStyle = {
		color: color || 'inherit',
		...style,
	}

	return (
		<Link
			href={href}
			className={`${styles.anchor} ${className}`}
			style={anchorStyle}
		>
			{children}
		</Link>
	)
}

export {
	Anchor,
	type AnchorProps,
}
