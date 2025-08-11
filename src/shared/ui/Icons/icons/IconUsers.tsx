import {type IconProps} from '../types'

function IconUsers({size = 16, className = ''}: IconProps) {
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
			<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
			<circle
				cx="9"
				cy="7"
				r="4"
			/>
			<path d="m22 21-2-2" />
			<path d="M16 16l4 4 4-4" />
		</svg>
	)
}

export {IconUsers}
