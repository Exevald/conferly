import {type ChangeEvent, type ReactNode} from 'react'
import styles from './TextInput.module.css'

type TextInputSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

type TextInputProps = {
	label?: string,
	placeholder?: string,
	value?: string,
	required?: boolean,
	type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'search',
	size?: TextInputSize,
	error?: string,
	disabled?: boolean,
	className?: string,
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void,
	onFocus?: () => void,
	onBlur?: () => void,
	style?: React.CSSProperties,
}

function TextInput({
	label,
	placeholder,
	value,
	required = false,
	type = 'text',
	size = 'md',
	error,
	disabled = false,
	className = '',
	onChange,
	onFocus,
	onBlur,
	style,
}: TextInputProps) {
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

	return (
		<div className={containerClasses}>
			{label && (
				<label className={styles.label}>
					{label}
					{required && <span className={styles.required}>{'*'}</span>}
				</label>
			)}
			<input
				type={type}
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
			{error && (
				<div className={styles.error}>
					{error}
				</div>
			)}
		</div>
	)
}

export {
	TextInput,
	type TextInputProps,
	type TextInputSize,
}
