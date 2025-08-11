import {
	IconClock,
	IconStar,
	IconTrash,
	IconUsers,
} from '@tabler/icons-react'
import styles from '../../NavigationPanel.module.css'
import {
	Button,
	Stack,
	Title,
} from '@/shared/ui'

function ProjectsCategories() {
	return (
		<Stack gap="md">
			<Title
				order={4}
				color="primary"
			>
				{'Проекты'}
			</Title>
			<Stack gap="xs">
				<Button
					variant="subtle"
					className={styles.sidebarButton}
				>
					<IconClock size={16} />
					{'Недавние'}
				</Button>
				<Button
					variant="subtle"
					className={styles.sidebarButton}
				>
					<IconStar size={16} />
					{'Избранное'}
				</Button>
				<Button
					variant="subtle"
					className={styles.sidebarButton}
				>
					<IconUsers size={16} />
					{'Доступные мне'}
				</Button>
				<Button
					variant="subtle"
					className={styles.sidebarButton}
				>
					<IconTrash size={16} />
					{'Корзина'}
				</Button>
			</Stack>
		</Stack>
	)
}

export {
	ProjectsCategories,
}
