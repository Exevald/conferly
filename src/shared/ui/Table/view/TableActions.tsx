import {Button} from '../../Button/Button'
import {Group} from '../../Group/Group'
import {type TableActionMulti, type TableActionSingle} from '../types'

type TableActionsProps<ROW> = {
	actions: (TableActionSingle<ROW> | TableActionMulti<ROW>)[],
	selectedRows: ROW[],
	isMultiSelection: boolean,
}

function TableActions<ROW>({
	actions,
	selectedRows,
	isMultiSelection,
}: TableActionsProps<ROW>) {
	return (
		<>
			{actions.map((action, actionIndex) => {
				const actionKey = `${action.text}-${actionIndex}`

				return (
					<Button
						key={actionKey}
						variant="primary"
						size="sm"
						onClick={() => {
							if (isMultiSelection) {
								(action as TableActionMulti<ROW>).onClick(selectedRows)
							}
							else {
								if (selectedRows.length > 0) {
									(action as TableActionSingle<ROW>).onClick(selectedRows[0])
								}
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

export {
	TableActions,
}
