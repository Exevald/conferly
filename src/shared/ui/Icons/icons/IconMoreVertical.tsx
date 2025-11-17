import {type IconProps} from '../types'

function IconMoreVertical({size = 24, ...props}: IconProps) {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<circle
				cx="12"
				cy="6"
				r="1.5"
				fill="currentColor"
			/>
			<circle
				cx="12"
				cy="12"
				r="1.5"
				fill="currentColor"
			/>
			<circle
				cx="12"
				cy="18"
				r="1.5"
				fill="currentColor"
			/>
		</svg>
	)
}

export {
	IconMoreVertical,
}
