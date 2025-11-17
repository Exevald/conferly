import {Button} from '../../Button/Button'
import {Group} from '../../Group/Group'
import {type TableProps} from '../types'
import {isMultiSelectionProps, isSingleSelectionProps} from '../utils/typeGuards'

type TableActionsProps<COLUMN_ID extends string, ROW> = {
	props: TableProps<COLUMN_ID, ROW>,
	selectedRows: ROW[],
}

function TableActions<COLUMN_ID extends string, ROW>({
	props,
	selectedRows,
}: TableActionsProps<COLUMN_ID, ROW>) {
	if (isSingleSelectionProps(props) && props.actions) {
		return (
			<>
				{props.actions.map((action, actionIndex) => {
					const actionKey = `${action.text}-${actionIndex}`

					return (
						<Button
							key={actionKey}
							variant="primary"
							size="sm"
							onClick={() => {
								if (selectedRows.length > 0) {
									action.onClick(selectedRows[0])
								}
							}}
						>
							<Group gap={4}>
								{action.icon}
								{action.text}
							</Group>
						</Button>
					)
				})}
			</>
		)
	}

	if (isMultiSelectionProps(props) && props.actions) {
		return (
			<>
				{props.actions.map((action, actionIndex) => {
					const actionKey = `${action.text}-${actionIndex}`

					return (
						<Button
							key={actionKey}
							variant="primary"
							size="sm"
							onClick={() => {
								action.onClick(selectedRows)
							}}
						>
							<Group gap={4}>
								{action.icon}
								{action.text}
							</Group>
						</Button>
					)
				})}
			</>
		)
	}

	return null
}

export {
	TableActions,
}
