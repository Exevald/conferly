import {type ReactNode} from 'react'

type TableActionSingle<ROW> = {
	icon?: ReactNode,
	text: string,
	onClick: (row: ROW) => void,
}

type TableActionMulti<ROW> = {
	icon?: ReactNode,
	text: string,
	onClick: (rows: ROW[]) => void,
}

export {
	type TableActionMulti,
	type TableActionSingle,
}
