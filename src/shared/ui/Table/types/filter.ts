type TableFilter<COLUMN_ID extends string, ROW> = {
	filterFn: (rows: ROW[], columnId: COLUMN_ID) => ROW[],
	onFilterOpen: (columnId: COLUMN_ID, onApply: (filterFn: (rows: ROW[]) => ROW[]) => void) => void,
}

export {
	type TableFilter,
}

