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
				gap="md"
				align="center"
			>
				<Title order={1}>{'Работа'}</Title>
				<Group gap="xs">
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
