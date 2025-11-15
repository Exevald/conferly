import {type ReactNode} from 'react'
import styles from './Center.module.css'
import {joinStyles} from '@/shared/utils/joinStyles'

type CenterProps = {
	children: ReactNode,
	className?: string,
	style?: React.CSSProperties,
}

function Center({
	children,
	className = '',
	style,
}: CenterProps) {
	const centerClasses = joinStyles(
		styles.center,
		className,
	)

	return (
		<div
			className={centerClasses}
			style={style}
		>
			{children}
		</div>
	)
}

export {
	Center,
	type CenterProps,
}
