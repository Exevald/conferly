import {
	type TableProps,
	type TablePropsWithMultiSelection,
	type TablePropsWithSingleSelection,
} from '../types'

function isSingleSelectionProps<COLUMN_ID extends string, ROW>(
	props: TableProps<COLUMN_ID, ROW>,
): props is TablePropsWithSingleSelection<COLUMN_ID, ROW> {
	return 'selection' in props && props.selection?.type === 'single'
}

function isMultiSelectionProps<COLUMN_ID extends string, ROW>(
	props: TableProps<COLUMN_ID, ROW>,
): props is TablePropsWithMultiSelection<COLUMN_ID, ROW> {
	return 'selection' in props && props.selection?.type === 'multi'
}

export {
	isMultiSelectionProps,
	isSingleSelectionProps,
}
