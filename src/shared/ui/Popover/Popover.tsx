'use client'

import {
	type ReactNode,
	useEffect,
	useRef,
	useState,
} from 'react'
import styles from './Popover.module.css'
import {joinStyles} from '@/shared/utils/joinStyles'

type PopoverPosition = 'top' | 'bottom' | 'left' | 'right'

type PopoverProps = {
	children: ReactNode,
	content: ReactNode,
	isOpen: boolean,
	onClose: () => void,
	position?: PopoverPosition,
	className?: string,
}

function Popover({
	children,
	content,
	isOpen,
	onClose,
	position = 'bottom',
	className = '',
}: PopoverProps) {
	const popoverRef = useRef<HTMLDivElement>(null)
	const triggerRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (!isOpen) {
			return
		}

		const handleClickOutside = (event: MouseEvent) => {
			if (
				popoverRef.current
				&& triggerRef.current
				&& !popoverRef.current.contains(event.target as Node)
				&& !triggerRef.current.contains(event.target as Node)
			) {
				onClose()
			}
		}

		document.addEventListener('mousedown', handleClickOutside)

		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [isOpen, onClose])

	const [positionStyles, setPositionStyles] = useState<React.CSSProperties>({})

	useEffect(() => {
		if (!isOpen || !triggerRef.current) {
			return
		}

		const updatePosition = () => {
			if (!triggerRef.current || !popoverRef.current) {
				return
			}

			const triggerRect = triggerRef.current.getBoundingClientRect()
			const popoverRect = popoverRef.current.getBoundingClientRect()
			const styles: React.CSSProperties = {}

			switch (position) {
				case 'bottom': {
					styles.top = `${triggerRect.bottom + window.scrollY + 8}px`
					styles.left = `${triggerRect.left + window.scrollX + triggerRect.width / 2 - popoverRect.width / 2}px`
					break
				}
				case 'top': {
					styles.bottom = `${window.innerHeight - triggerRect.top - window.scrollY + 8}px`
					styles.left = `${triggerRect.left + window.scrollX + triggerRect.width / 2 - popoverRect.width / 2}px`
					break
				}
				case 'right': {
					styles.top = `${triggerRect.top + window.scrollY + triggerRect.height / 2 - popoverRect.height / 2}px`
					styles.left = `${triggerRect.right + window.scrollX + 8}px`
					break
				}
				case 'left': {
					styles.top = `${triggerRect.top + window.scrollY + triggerRect.height / 2 - popoverRect.height / 2}px`
					styles.right = `${window.innerWidth - triggerRect.left - window.scrollX + 8}px`
					break
				}
			}

			setPositionStyles(styles)
		}

		setTimeout(updatePosition, 0)
		window.addEventListener('resize', updatePosition)
		window.addEventListener('scroll', updatePosition)

		return () => {
			window.removeEventListener('resize', updatePosition)
			window.removeEventListener('scroll', updatePosition)
		}
	}, [isOpen, position])

	return (
		<div className={joinStyles(styles.popover, className)}>
			<div
				ref={triggerRef}
				className={styles.popoverTrigger}
			>
				{children}
			</div>
			{isOpen && (
				<div
					ref={popoverRef}
					className={joinStyles(styles.popoverContent, styles[`popover--${position}`])}
					style={positionStyles}
				>
					{content}
				</div>
			)}
		</div>
	)
}

export {
	Popover,
	type PopoverProps,
	type PopoverPosition,
}
