import {useMemo, useState} from 'react'
import {type TableProps} from '../types'

function useTableProps<COLUMN_ID extends string, ROW>(props: TableProps<COLUMN_ID, ROW>) {
	const {
		rows,
		getCellData,
		columns,
		rowActions,
		selectionActions,
		onRowClick,
		filter,
		selection,
		emptyState,
		className,
	} = props

	const [activeFilterColumnId, setActiveFilterColumnId] = useState<COLUMN_ID | null>(null)
	const [columnFilterFn, setColumnFilterFn] = useState<((rows: ROW[]) => ROW[]) | null>(null)

	const displayRows = useMemo(() => {
		let filtered = rows

		if (filter) {
			if (activeFilterColumnId) {
				filtered = filter.filterFn(filtered, activeFilterColumnId)
			}
		}

		if (columnFilterFn) {
			filtered = columnFilterFn(filtered)
		}

		return filtered
	}, [rows, filter, activeFilterColumnId, columnFilterFn])

	const hasRowActions = rowActions && rowActions.length > 0

	const gridTemplateColumns = useMemo(() => {
		const cols: string[] = []
		if (selection) {
			cols.push('auto')
		}
		columns.forEach(column => {
			if (column.width) {
				if (typeof column.width === 'number') {
					cols.push(`${column.width}px`)
				}
				else {
					cols.push(column.width)
				}
			}
			else {
				cols.push('1fr')
			}
		})
		if (hasRowActions) {
			cols.push('auto')
		}
		return cols.join(' ')
	}, [columns, selection, hasRowActions])

	const isRowSelected = (row: ROW): boolean => {
		if (!selection) {
			return false
		}
		if (selection.type === 'single') {
			return selection.selectedRow === row
		}
		return selection.selectedRows.includes(row)
	}

	const handleRowSelect = (row: ROW) => {
		if (!selection) {
			return
		}
		if (selection.type === 'single') {
			const newSelected = selection.selectedRow === row
				? null
				: row
			selection.onSelect?.(newSelected)
		}
		else {
			const isSelected = selection.selectedRows.includes(row)
			const newSelected = isSelected
				? selection.selectedRows.filter(r => r !== row)
				: [...selection.selectedRows, row]
			selection.onSelect?.(newSelected)
		}
	}

	const handleSelectAll = () => {
		if (!selection || selection.type !== 'multi') {
			return
		}
		const hasDisplayRows = displayRows.length > 0
		const allRowsSelected = selection.selectedRows.length === displayRows.length
		const allSelected = hasDisplayRows && allRowsSelected
		selection.onSelect?.(allSelected
			? []
			: [...displayRows])
	}

	const isMultiSelection = selection?.type === 'multi'
	const hasDisplayRows = displayRows.length > 0
	const selectedRowsCount = selection?.type === 'multi'
		? selection.selectedRows.length
		: 0
	const allRowsSelected = selectedRowsCount === displayRows.length
	const hasSelectedRows = selectedRowsCount > 0
	const someRowsSelected = selectedRowsCount < displayRows.length

	const isAllSelected = isMultiSelection && hasDisplayRows && allRowsSelected
	const isIndeterminate = isMultiSelection && hasSelectedRows && someRowsSelected

	const getSelectedRows = (): ROW[] => {
		if (!selection) {
			return []
		}
		if (selection.type === 'single') {
			return selection.selectedRow
				? [selection.selectedRow]
				: []
		}
		return selection.selectedRows
	}

	const handleFilterOpen = (columnId: COLUMN_ID) => {
		if (!filter || !filter.onFilterOpen) {
			return
		}

		setActiveFilterColumnId(columnId)

		filter.onFilterOpen(columnId, filterFn => {
			setColumnFilterFn(filterFn)
		})
	}

	return {
		displayRows,
		gridTemplateColumns,
		isRowSelected,
		handleRowSelect,
		handleSelectAll,
		isAllSelected,
		isIndeterminate,
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
	}
}

export {
	useTableProps,
}
