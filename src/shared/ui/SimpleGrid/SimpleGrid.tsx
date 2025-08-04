import {type ReactNode} from 'react'
import styles from './SimpleGrid.module.css'

type SimpleGridCols = 1 | 2 | 3 | 4 | 5 | 6
type SimpleGridSpacing = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
type SimpleGridBreakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

type SimpleGridProps = {
	children: ReactNode,
	cols?: SimpleGridCols,
	spacing?: SimpleGridSpacing,
	breakpoints?: {
		xs?: SimpleGridCols,
		sm?: SimpleGridCols,
		md?: SimpleGridCols,
		lg?: SimpleGridCols,
		xl?: SimpleGridCols,
	},
	className?: string,
	style?: React.CSSProperties,
}

function SimpleGrid({
	children,
	cols = 1,
	spacing = 'md',
	breakpoints,
	className = '',
	style,
}: SimpleGridProps) {
	const gridClasses = [
		styles.grid,
		styles[`grid--cols-${cols}`],
		styles[`grid--spacing-${spacing}`],
		breakpoints?.xs && styles[`grid--breakpoint-xs-${breakpoints.xs}`],
		breakpoints?.sm && styles[`grid--breakpoint-sm-${breakpoints.sm}`],
		breakpoints?.md && styles[`grid--breakpoint-md-${breakpoints.md}`],
		breakpoints?.lg && styles[`grid--breakpoint-lg-${breakpoints.lg}`],
		breakpoints?.xl && styles[`grid--breakpoint-xl-${breakpoints.xl}`],
		className,
	].filter(Boolean).join(' ')

	return (
		<div
			className={gridClasses}
			style={style}
		>
			{children}
		</div>
	)
}

export {
	SimpleGrid,
	type SimpleGridProps,
	type SimpleGridCols,
	type SimpleGridSpacing,
	type SimpleGridBreakpoint,
}
