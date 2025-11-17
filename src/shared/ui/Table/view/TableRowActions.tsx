'use client'

import {type ReactNode, useState} from 'react'
import {Button} from '../../Button/Button'
import {Group} from '../../Group/Group'
import {IconMoreVertical} from '../../Icons/Icons'
import {Popover} from '../../Popover/Popover'
import {Stack} from '../../Stack/Stack'
import {type TableActionSingle} from '../types'
import styles from './TableRowActions.module.css'

type TableRowActionsProps<ROW> = {
	actions: TableActionSingle<ROW>[],
	row: ROW,
}

function TableRowActions<ROW>({actions, row}: TableRowActionsProps<ROW>) {
	const [isOpen, setIsOpen] = useState(false)

	const handleActionClick = (action: TableActionSingle<ROW>) => {
		action.onClick(row)
		setIsOpen(false)
	}

	return (
		<Popover
			isOpen={isOpen}
			onClose={() => setIsOpen(false)}
			position="bottom"
			content={(
				<Stack gap={4}>
					{actions.map((action, index) => (
						<Button
							key={`${action.text}-${index}`}
							variant="subtle"
							size="sm"
							onClick={() => handleActionClick(action)}
							className={styles.rowActionButton}
						>
							<Group gap={8}>
								{action.icon}
								{action.text}
							</Group>
						</Button>
					))}
				</Stack>
			)}
		>
			<button
				type="button"
				className={styles.rowActionsButton}
				onClick={e => {
					e.stopPropagation()
					setIsOpen(!isOpen)
				}}
			>
				<IconMoreVertical size={16} />
			</button>
		</Popover>
	)
}

export {
	TableRowActions,
}
