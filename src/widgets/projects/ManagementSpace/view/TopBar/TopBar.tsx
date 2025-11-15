import {
	Button,
	Group,
	IconPlus,
	IconUsers,
	Title,
} from '@/shared/ui'

function TopBar() {
	return (
		<Group
			justify="apart"
			align="center"
		>
			<Group
				gap={12}
				align="center"
			>
				<Title order={1}>{'Работа'}</Title>
				<Group gap={4}>
					<Button
						variant="subtle"
						size="sm"
					>
						<IconUsers size={16} />
					</Button>
					<Button
						variant="subtle"
						size="sm"
					>
						<IconPlus size={16} />
					</Button>
					<Button
						variant="subtle"
						size="sm"
					>
						{'⋯'}
					</Button>
				</Group>
			</Group>
			<Button	variant="primary">
				<IconPlus size={16} />
				{'Создать\r'}
			</Button>
		</Group>
	)
}

export {
	TopBar,
}
