import {IconPlus} from '@tabler/icons-react'
import styles from '../../NavigationPanel.module.css'
import {
	Button,
	Group,
	Stack,
	Title,
} from '@/shared/ui'

function ProjectList() {
	return (
		<Stack gap="md">
			<Group
				justify="apart"
				align="center"
			>
				<Title
					order={4}
					color="primary"
				>{'Список проектов'}</Title>
				<Button
					variant="subtle"
					size="sm"
				>
					<IconPlus size={16} />
				</Button>
			</Group>
			<Stack gap="xs">
				<Button
					variant="subtle"
					size="sm"
					className={styles.sidebarButton}
				>
					{'Веб-разработка 1 курс (2...'}
				</Button>
				<Button
					variant="subtle"
					size="sm"
					className={styles.sidebarButton}
				>
					{'Институт'}
				</Button>
				<Button
					variant="subtle"
					size="sm"
					className={styles.sidebarButton}
				>
					{'Личное'}
				</Button>
				<Button
					variant="subtle"
					size="sm"
					className={styles.sidebarButton}
				>
					{'Марафон по веб-разработке'}
				</Button>
				<Button
					variant="subtle"
					size="sm"
					className={styles.sidebarButton}
				>
					{'Погружение в программирование'}
				</Button>
				<Button
					variant="primary"
					size="sm"
					className={styles.sidebarButton}
				>
					{'Работа'}
				</Button>
			</Stack>
		</Stack>
	)
}

export {
	ProjectList,
}
