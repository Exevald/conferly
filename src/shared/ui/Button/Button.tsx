import {type ReactNode} from 'react'
import styles from './Button.module.css'

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
}: ButtonProps) {
	const buttonClasses = [
		styles.button,
		styles[`button--${variant}`],
		styles[`button--${size}`],
		fullWidth && styles['button--fullWidth'],
		className,
	].filter(Boolean).join(' ')

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
