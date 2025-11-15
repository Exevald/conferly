import Link from 'next/link'
import {type ReactNode} from 'react'
import styles from './Button.module.css'
import {joinStyles} from '@/shared/utils/joinStyles'

type ButtonVariant = 'primary' | 'secondary' | 'subtle'
type ButtonSize = 'sm' | 'md' | 'lg'

type ButtonProps = {
	children: ReactNode,
	variant?: ButtonVariant,
	size?: ButtonSize,
	disabled?: boolean,
	onClick?: () => void,
	className?: string,
	type?: 'button' | 'submit',
	fullWidth?: boolean,
	href?: string,
}

function Button({
	children,
	variant = 'primary',
	size = 'md',
	disabled = false,
	onClick,
	className = '',
	type = 'button',
	fullWidth = false,
	href,
}: ButtonProps) {
	const buttonClasses = joinStyles(
		styles.button,
		styles[`button--${variant}`],
		styles[`button--${size}`],
		fullWidth && styles['button--fullWidth'],
		className,
	)

	if (href) {
		return (
			<Link
				href={href}
				className={buttonClasses}
				style={{
					textDecoration: 'none',
				}}
			>
				{children}
			</Link>
		)
	}

	return (
		<button
			type={type}
			className={buttonClasses}
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</button>
	)
}

export {
	Button,
	type ButtonProps,
	type ButtonVariant,
	type ButtonSize,
}
