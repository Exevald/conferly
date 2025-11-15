import {type ReactNode} from 'react'
import {joinStyles} from '@/shared/utils/joinStyles'
import styles from './Center.module.css'

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
