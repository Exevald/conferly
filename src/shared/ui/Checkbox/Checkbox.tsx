import {forwardRef} from 'react'
import styles from './Checkbox.module.css'
import {joinStyles} from '@/shared/utils/joinStyles'

type CheckboxProps = {
	checked?: boolean,
	onChange?: (checked: boolean) => void,
	disabled?: boolean,
	className?: string,
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
	({
		checked = false,
		onChange,
		disabled = false,
		className = '',
		...props
	}, ref) => {
		const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
			onChange?.(event.target.checked)
		}

		return (
			<label
				className={joinStyles(
					styles.checkbox,
					checked && styles.checked,
					className,
				)}
			>
				<input
					ref={ref}
					type="checkbox"
					checked={checked}
					onChange={handleChange}
					disabled={disabled}
					style={{display: 'none'}}
					{...props}
				/>
			</label>
		)
	},
)

export {
	Checkbox,
}
