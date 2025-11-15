import {type ReactNode, useId} from 'react'
import styles from './SimpleGrid.module.css'

type SimpleGridCols = 1 | 2 | 3 | 4 | 5 | 6

type Breakpoint = {
	minWidth: number,
	cols: SimpleGridCols,
}

type SimpleGridProps = {
	children: ReactNode,
	cols?: SimpleGridCols,
	spacing?: number | string,
	breakpoints?: Breakpoint[],
	className?: string,
	style?: React.CSSProperties,
}

function SimpleGrid({
	children,
	cols = 1,
	spacing = 16,
	breakpoints,
	className = '',
	style,
}: SimpleGridProps) {
	const gridId = useId().replace(/:/g, '-')
	const inlineStyles: React.CSSProperties = {
		...(style || {}),
	}

	if (spacing !== undefined) {
		inlineStyles.gap = spacing
	}

	const gridClasses = [
		styles.grid,
		styles[`grid--cols-${cols}`],
		className,
	].filter(Boolean).join(' ')

	const mediaQueries = breakpoints
		? breakpoints.map(({minWidth, cols: colsCount}) =>
			`@media (min-width: ${minWidth}px) { .grid-${gridId} { grid-template-columns: repeat(${colsCount}, 1fr); } }`,
		)
		: []

	return (
		<>
			{mediaQueries.length > 0 && (
				<style>
					{mediaQueries.join('\n')}
				</style>
			)}
			<div
				className={`${gridClasses} grid-${gridId}`}
				style={
					Object.keys(inlineStyles).length > 0
						? inlineStyles
						: undefined
				}
			>
				{children}
			</div>
		</>
	)
}

export {
	SimpleGrid,
	type SimpleGridProps,
	type SimpleGridCols,
	type Breakpoint,
}
