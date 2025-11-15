'use client'

import {type ReactNode} from 'react'
import {joinStyles} from '@/shared/utils/joinStyles'
import styles from './SelectList.module.css'

type SelectListSize = 'sm' | 'md' | 'lg'

type SelectListItem = {
	id: string,
	label: string,
	icon?: ReactNode,
	href?: string,
	disabled?: boolean,
}

type SelectListProps = {
	items: SelectListItem[],
	selectedId?: string,
	onSelect?: (id: string) => void,
	size?: SelectListSize,
	variant?: 'default' | 'subtle',
	className?: string,
}

function SelectList({
	items,
	selectedId,
	onSelect,
	size = 'md',
	variant = 'default',
	className = '',
}: SelectListProps) {
	const listClasses = joinStyles(
		styles.selectList,
		styles[`selectList--${size}`],
		styles[`selectList--${variant}`],
		className,
	)

	const handleItemClick = (item: SelectListItem) => {
		if (item.disabled) {
			return
		}
		onSelect?.(item.id)
	}

	return (
		<div className={listClasses}>
			{items.map(item => {
				const itemClasses = joinStyles(
					styles.selectListItem,
					styles[`selectListItem--${size}`],
					styles[`selectListItem--${variant}`],
					selectedId === item.id && styles['selectListItem--selected'],
					item.disabled && styles['selectListItem--disabled'],
				)

				const content = (
					<>
						{item.icon && (
							<span className={styles.selectListItemIcon}>
								{item.icon}
							</span>
						)}
						<span className={styles.selectListItemLabel}>
							{item.label}
						</span>
					</>
				)

				if (item.href) {
					return (
						<a
							key={item.id}
							href={item.href}
							className={itemClasses}
							onClick={() => handleItemClick(item)}
						>
							{content}
						</a>
					)
				}

				return (
					<button
						key={item.id}
						type="button"
						className={itemClasses}
						onClick={() => handleItemClick(item)}
						disabled={item.disabled}
					>
						{content}
					</button>
				)
			})}
		</div>
	)
}

export {
	SelectList,
	type SelectListProps,
	type SelectListItem,
	type SelectListSize,
}
