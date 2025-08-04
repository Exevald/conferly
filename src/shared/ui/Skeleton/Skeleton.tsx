import styles from './Skeleton.module.css'

type SkeletonProps = {
	height?: number | string,
	width?: number | string,
	className?: string,
	/** margin-bottom (px / rem / %) */
	mb?: number | string,
	/** margin-left and margin-right (px / rem / %) */
	mx?: string,
}

function Skeleton({
	height = 20,
	width = '100%',
	className = '',
	mb,
	mx,
}: SkeletonProps) {
	const style = {
		height: typeof height === 'number'
			? `${height}px`
			: height,
		width: typeof width === 'number'
			? `${width}px`
			: width,
		marginBottom: mb
			? (typeof mb === 'number'
				? `${mb}px`
				: mb)
			: undefined,
		marginLeft: mx === 'auto'
			? 'auto'
			: undefined,
		marginRight: mx === 'auto'
			? 'auto'
			: undefined,
	}

	return (
		<div
			className={`${styles.skeleton} ${className}`}
			style={style}
		/>
	)
}

export {
	Skeleton,
	type SkeletonProps,
}
