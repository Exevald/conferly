type TableColumn<COLUMN_ID extends string> = {
	id: COLUMN_ID,
	label: string,
	width?: number | `${number}fr`,
}

export {
	type TableColumn,
}
