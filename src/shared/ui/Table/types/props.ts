import {type ReactNode} from 'react'
import {type TableActionMulti, type TableActionSingle} from './action'
import {type TableColumn} from './column'
import {type TableFilter} from './filter'
import {type TableSelectionMulti, type TableSelectionSingle} from './selection'

type TablePropsBase<COLUMN_ID extends string, ROW> = {
	rows: ROW[],
	getCellData: (row: ROW, columnId: COLUMN_ID) => ReactNode,
	columns: readonly TableColumn<COLUMN_ID>[],
	onRowClick?: (row: ROW) => void,
	filter?: TableFilter<COLUMN_ID, ROW>,
	emptyState?: {
		title: string,
		description: string,
		icon?: ReactNode,
	},
	className?: string,
}

type TablePropsWithSingleSelection<COLUMN_ID extends string, ROW> = TablePropsBase<COLUMN_ID, ROW> & {
	selection: TableSelectionSingle<ROW>,
	rowActions?: TableActionSingle<ROW>[],
	selectionActions?: TableActionSingle<ROW>[],
}

type TablePropsWithMultiSelection<COLUMN_ID extends string, ROW> = TablePropsBase<COLUMN_ID, ROW> & {
	selection: TableSelectionMulti<ROW>,
	rowActions?: TableActionSingle<ROW>[],
	selectionActions?: TableActionMulti<ROW>[],
}

type TablePropsWithoutSelection<COLUMN_ID extends string, ROW> = TablePropsBase<COLUMN_ID, ROW> & {
	selection?: never,
	rowActions?: TableActionSingle<ROW>[],
	selectionActions?: never,
}

type TableProps<COLUMN_ID extends string, ROW> =
	| TablePropsWithSingleSelection<COLUMN_ID, ROW>
	| TablePropsWithMultiSelection<COLUMN_ID, ROW>
	| TablePropsWithoutSelection<COLUMN_ID, ROW>

export {
	type TableProps,
	type TablePropsBase,
	type TablePropsWithMultiSelection,
	type TablePropsWithSingleSelection,
	type TablePropsWithoutSelection,
}

