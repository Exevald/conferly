export const radius = {
	xs: 'var(--radius-xs)',
	sm: 'var(--radius-sm)',
	md: 'var(--radius-md)',
	lg: 'var(--radius-lg)',
	xl: 'var(--radius-xl)',
	'2xl': 'var(--radius-2xl)',
} as const

export type Radius = keyof typeof radius
