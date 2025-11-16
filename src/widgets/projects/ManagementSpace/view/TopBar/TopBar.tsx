import {type Project} from '@/entities/Project'
import {
	Button,
	Group,
	IconPlus,
	IconUsers,
	Title,
} from '@/shared/ui'

type TopBarProps = {
	project?: Project | null,
	loading?: boolean,
}

function TopBar({project, loading}: TopBarProps) {
	const projectName = loading
		? 'Загрузка...'
		: project?.name || 'Выберите проект'

	return (
		<Group
			justify="apart"
			align="center"
		>
			<Group
				gap={12}
				align="center"
			>
				<Title order={1}>
					{projectName}
				</Title>
				{project && !loading && (
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
				)}
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
