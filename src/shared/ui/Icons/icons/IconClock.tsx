import {type IconProps} from '../types'

function IconClock({size = 16, className = ''}: IconProps) {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			className={className}
		>
			<circle
				cx="12"
				cy="12"
				r="10"
			/>
			<polyline points="12,6 12,12 16,14" />
		</svg>
	)
}

export {IconClock}
