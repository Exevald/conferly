import {type TableColumn} from '../types'

type DemoRow = {
	id: string,
	name: string,
	email: string,
	role: string,
	status: string,
	createdAt: string,
}

type ColumnType = 'name' | 'email' | 'role' | 'status' | 'createdAt'

const demoData: DemoRow[] = [
	{
		id: '1',
		name: 'Иван Иванов',
		email: 'ivan@example.com',
		role: 'Администратор',
		status: 'Активен',
		createdAt: '2024-01-15',
	},
	{
		id: '2',
		name: 'Мария Петрова',
		email: 'maria@example.com',
		role: 'Менеджер',
		status: 'Активен',
		createdAt: '2024-02-20',
	},
	{
		id: '3',
		name: 'Алексей Сидоров',
		email: 'alex@example.com',
		role: 'Пользователь',
		status: 'Неактивен',
		createdAt: '2024-03-10',
	},
	{
		id: '4',
		name: 'Елена Козлова',
		email: 'elena@example.com',
		role: 'Менеджер',
		status: 'Активен',
		createdAt: '2024-01-05',
	},
	{
		id: '5',
		name: 'Дмитрий Волков',
		email: 'dmitry@example.com',
		role: 'Пользователь',
		status: 'Активен',
		createdAt: '2024-04-12',
	},
]

const columns: readonly TableColumn<'name' | 'email' | 'role' | 'status' | 'createdAt'>[] = [
	{
		id: 'name',
		label: 'Имя',
		width: '2fr',
	},
	{
		id: 'email',
		label: 'Email',
		width: '2fr',
	},
	{
		id: 'role',
		label: 'Роль',
		width: '1.5fr',
	},
	{
		id: 'status',
		label: 'Статус',
		width: '1fr',
	},
	{
		id: 'createdAt',
		label: 'Дата создания',
		width: 150,
	},
]

export {
	columns,
	demoData,
	type DemoRow,
	type ColumnType,
}
