import styles from './NavigationPanel.module.css'
import {ProjectList} from './view/ProjectList/ProjectList'
import {ProjectsCategories} from './view/ProjectsCategories/ProjectsCategories'
import {Stack} from '@/shared/ui'

function NavigationPanel() {
	return (
		<aside className={styles.sidebar}>
			<Stack gap="xl">
				<ProjectsCategories />
				<ProjectList />
			</Stack>
		</aside>
	)
}

export {
	NavigationPanel,
}
