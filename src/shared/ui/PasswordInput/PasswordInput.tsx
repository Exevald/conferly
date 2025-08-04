import {type ChangeEvent, useState} from 'react'
import {IconEye} from '../Icons/icons/IconEye'
import {IconEyeOff} from '../Icons/icons/IconEyeOff'
import styles from './PasswordInput.module.css'

type PasswordInputSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

type PasswordInputProps = {
	label?: string,
	placeholder?: string,
	value?: string,
	required?: boolean,
	size?: PasswordInputSize,
	error?: string,
	disabled?: boolean,
	className?: string,
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void,
	onFocus?: () => void,
	onBlur?: () => void,
	style?: React.CSSProperties,
}

function PasswordInput({
	label,
	placeholder,
	value,
	required = false,
	size = 'md',
	error,
	disabled = false,
	className = '',
	onChange,
	onFocus,
	onBlur,
	style,
}: PasswordInputProps) {
	const [showPassword, setShowPassword] = useState(false)

	const inputClasses = [
		styles.input,
		styles[`input--${size}`],
		error && styles['input--error'],
		disabled && styles['input--disabled'],
		className,
	].filter(Boolean).join(' ')

	const containerClasses = [
		styles.container,
		error && styles['container--error'],
	].filter(Boolean).join(' ')

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword)
	}

	return (
		<div className={containerClasses}>
			{label && (
				<label className={styles.label}>
					{label}
					{required && <span className={styles.required}>{'*'}</span>}
				</label>
			)}
			<div className={styles.inputWrapper}>
				<input
					type={showPassword
						? 'text'
						: 'password'}
					placeholder={placeholder}
					value={value}
					required={required}
					disabled={disabled}
					className={inputClasses}
					onChange={onChange}
					onFocus={onFocus}
					onBlur={onBlur}
					style={style}
				/>
				<button
					type="button"
					className={styles.toggleButton}
					onClick={togglePasswordVisibility}
					disabled={disabled}
				>
					{showPassword
						? <IconEyeOff size={16} />
						: <IconEye size={16} />}
				</button>
			</div>
			{error && (
				<div className={styles.error}>
					{error}
				</div>
			)}
		</div>
	)
}

export {
	PasswordInput,
	type PasswordInputProps,
	type PasswordInputSize,
}
