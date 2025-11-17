type TableSelectionSingle<ROW> = {
	type: 'single',
	selectedRow: ROW | null,
	onSelect?: (row: ROW | null) => void,
}

type TableSelectionMulti<ROW> = {
	type: 'multi',
	selectedRows: ROW[],
	onSelect?: (rows: ROW[]) => void,
}

type TableSelection<ROW> = TableSelectionSingle<ROW> | TableSelectionMulti<ROW>

export {
	type TableSelection,
	type TableSelectionMulti,
	type TableSelectionSingle,
}

