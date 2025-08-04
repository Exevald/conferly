import {type ReactNode} from 'react'
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
	const centerClasses = [
		styles.center,
		className,
	].filter(Boolean).join(' ')

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
