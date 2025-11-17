'use client'

import {Checkbox} from '../Checkbox/Checkbox'
import {default as EmptyState} from '../EmptyState/EmptyState'
import {IconSearch} from '../Icons/Icons'
import {Text} from '../Text/Text'
import {useTableProps} from './hooks/useTableProps'
import styles from './Table.module.css'
import {type TableProps} from './types'
import {TableActions} from './view/TableActions'
import {TableRowActions} from './view/TableRowActions'
import {joinStyles} from '@/shared/utils/joinStyles'

function Table<COLUMN_ID extends string, ROW>(props: TableProps<COLUMN_ID, ROW>) {
	const {
		displayRows,
		gridTemplateColumns,
		isRowSelected,
		handleRowSelect,
		handleSelectAll,
		isAllSelected,
		getSelectedRows,
		getCellData,
		columns,
		rowActions,
		selectionActions,
		hasRowActions,
		onRowClick,
		emptyState,
		className,
		selection,
		filter,
		handleFilterOpen,
	} = useTableProps(props)

	if (displayRows.length === 0) {
		if (emptyState) {
			return (
				<div className={joinStyles(styles.table, className)}>
					<EmptyState {...emptyState} />
				</div>
			)
		}
		return (
			<div className={joinStyles(styles.table, className)}>
				<div className={styles.tableEmpty}>
					<Text
						color="muted"
						align="center"
					>
						{'Нет данных'}
					</Text>
				</div>
			</div>
		)
	}

	const selectedRows = getSelectedRows()
	const hasSelectionActions = selectionActions && selectionActions.length > 0 && selectedRows.length > 0
	const isMultiSelection = selection?.type === 'multi'

	const handleRowClick = (row: ROW) => {
		if (selection) {
			handleRowSelect(row)
		}
		onRowClick?.(row)
	}

	const handleCheckboxClick = (e: React.MouseEvent, row: ROW) => {
		e.stopPropagation()
		handleRowSelect(row)
	}


	return (
		<div className={joinStyles(styles.table, className)}>
			<div
				className={styles.tableHeader}
				style={{'--table-columns': gridTemplateColumns} as React.CSSProperties}
			>
				{selection && (
					<div className={styles.tableCheckbox}>
						{selection.type === 'multi' && (
							<Checkbox
								checked={isAllSelected}
								onChange={handleSelectAll}
							/>
						)}
					</div>
				)}
				{columns.map(column => (
					<div
						key={column.id}
						className={styles.tableHeaderCell}
					>
						<div style={{fontWeight: 600}}>
							<Text
								size="sm"
								color="secondary"
							>
								{column.label}
							</Text>
						</div>
						{filter?.onFilterOpen && (
							<div
								className={styles.tableFilterIcon}
								onClick={e => {
									e.stopPropagation()
									handleFilterOpen(column.id)
								}}
							>
								<IconSearch size={14} />
							</div>
						)}
					</div>
				))}
				{hasRowActions && (
					<div className={styles.tableHeaderCell} />
				)}
			</div>
			<div className={styles.tableBody}>
				{/* TODO: Виртуализация - обернуть в react-window или react-virtual */}
				{displayRows.map((row, index) => {
					const isSelected = isRowSelected(row)
					const rowKey = `row-${index}`

					return (
						<div
							key={rowKey}
							className={joinStyles(
								styles.tableRow,
								(onRowClick || selection) && styles['tableRow--clickable'],
								isSelected && styles['tableRow--selected'],
							)}
							onClick={() => handleRowClick(row)}
							style={{'--table-columns': gridTemplateColumns} as React.CSSProperties}
						>
							{selection && (
								<div
									className={styles.tableCheckbox}
									onClick={e => handleCheckboxClick(e, row)}
								>
									<Checkbox
										checked={isSelected}
										onChange={() => handleRowSelect(row)}
									/>
								</div>
							)}
							{columns.map(column => (
								<div
									key={column.id}
									className={styles.tableCell}
								>
									{getCellData(row, column.id)}
								</div>
							))}
							{hasRowActions && rowActions && (
								<div
									className={styles.tableCell}
									onClick={e => e.stopPropagation()}
								>
									<TableRowActions
										actions={rowActions}
										row={row}
									/>
								</div>
							)}
						</div>
					)
				})}
			</div>
			{hasSelectionActions && selection && selectionActions && (
				<div className={styles.tableActions}>
					<TableActions
						actions={selectionActions}
						selectedRows={selectedRows}
						isMultiSelection={isMultiSelection}
					/>
				</div>
			)}
			{/* TODO: Пагинация - добавить UI для навигации по страницам */}
		</div>
	)
}

export {
	Table,
}
