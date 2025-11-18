'use client'

import {useState} from 'react'
import {Table} from '../Table'
import {
	type ColumnType,
	type DemoRow,
	columns,
	demoData,
} from './mock'
import {
	type TableActionMulti,
	type TableActionSingle,
	type TableColumn,
	type TableFilter,
	type TableSelectionMulti,
	type TableSelectionSingle,
	Button,
	IconSettings,
	IconStar,
	IconTrash,
	Stack,
	Text,
	TextInput,
	Title,
} from '@/shared/ui'

function TableDemo() {
	const [multiSelectedRows, setMultiSelectedRows] = useState<DemoRow[]>([])
	const [singleSelectedRow, setSingleSelectedRow] = useState<DemoRow | null>(null)
	const [filterValues, setFilterValues] = useState<Record<string, string>>({})
	const [activeFilterColumnId, setActiveFilterColumnId] = useState<ColumnType | null>(null)

	const multiSelection: TableSelectionMulti<DemoRow> = {
		type: 'multi',
		selectedRows: multiSelectedRows,
		onSelect: setMultiSelectedRows,
	}

	const singleSelection: TableSelectionSingle<DemoRow> = {
		type: 'single',
		selectedRow: singleSelectedRow,
		onSelect: setSingleSelectedRow,
	}

	const rowActions: TableActionSingle<DemoRow>[] = [
		{
			icon: <IconSettings size={16} />,
			text: 'Редактировать',
			onClick: row => {
				alert(`Редактирование: ${row.name}`)
			},
		},
		{
			icon: <IconStar size={16} />,
			text: 'В избранное',
			onClick: row => {
				alert(`Добавлено в избранное: ${row.name}`)
			},
		},
		{
			icon: <IconTrash size={16} />,
			text: 'Удалить',
			onClick: row => {
				alert(`Удаление: ${row.name}`)
			},
		},
	]

	const multiSelectionActions: TableActionMulti<DemoRow>[] = [
		{
			icon: <IconTrash size={16} />,
			text: 'Удалить выбранные',
			onClick: rows => {
				alert(`Удаление ${rows.length} элементов`)
			},
		},
		{
			icon: <IconSettings size={16} />,
			text: 'Изменить роль',
			onClick: rows => {
				alert(`Изменение роли для ${rows.length} элементов`)
			},
		},
	]

	const singleSelectionActions: TableActionSingle<DemoRow>[] = [
		{
			icon: <IconTrash size={16} />,
			text: 'Удалить',
			onClick: row => {
				alert(`Удаление: ${row.name}`)
			},
		},
		{
			icon: <IconSettings size={16} />,
			text: 'Редактировать',
			onClick: row => {
				alert(`Редактирование: ${row.name}`)
			},
		},
	]

	const filter: TableFilter<'name' | 'email' | 'role' | 'status' | 'createdAt', DemoRow> = {
		filterFn: (rows, columnId) => {
			const filterText = filterValues[columnId]?.toLowerCase() || ''
			if (!filterText) {
				return rows
			}
			return rows.filter(row => {
				const value = String(row[columnId]).toLowerCase()
				return value.includes(filterText)
			})
		},
		onFilterOpen: (columnId, onApply) => {
			setActiveFilterColumnId(columnId)
			const currentValue = filterValues[columnId] || ''

			const input = window.prompt(`Фильтр по ${columns.find(c => c.id === columnId)?.label}:`, currentValue)
			if (input !== null) {
				setFilterValues(prev => ({
					...prev,
					[columnId]: input,
				}))
				const filterText = input.toLowerCase()
				onApply(rows => {
					if (!filterText) {
						return rows
					}
					return rows.filter(row => {
						const value = String(row[columnId]).toLowerCase()
						return value.includes(filterText)
					})
				})
			}
			setActiveFilterColumnId(null)
		},
	}

	const getCellData = (row: DemoRow, columnId: 'name' | 'email' | 'role' | 'status' | 'createdAt') => {
		const value = row[columnId]
		return (
			<Text size="sm">
				{String(value)}
			</Text>
		)
	}

	return (
		<Stack gap={32}>
			<Stack gap={16}>
				<Title order={4}>{'Таблица с множественным выбором'}</Title>
				<Table
					rows={demoData}
					columns={columns}
					getCellData={getCellData}
					selection={multiSelection}
					rowActions={rowActions}
					selectionActions={multiSelectionActions}
					filter={filter}
					emptyState={{
						title: 'Нет данных',
						description: 'Данные не найдены',
					}}
				/>
			</Stack>
			<Stack gap={16}>
				<Title order={4}>{'Таблица с одиночным выбором'}</Title>
				<Table
					rows={demoData}
					columns={columns}
					getCellData={getCellData}
					selection={singleSelection}
					rowActions={rowActions}
					selectionActions={singleSelectionActions}
					filter={filter}
					emptyState={{
						title: 'Нет данных',
						description: 'Данные не найдены',
					}}
				/>
			</Stack>
		</Stack>
	)
}

export {
	TableDemo,
}
