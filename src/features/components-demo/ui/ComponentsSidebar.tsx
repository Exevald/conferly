import {type Component} from '../model/const'
import styles from './ComponentsSidebar.module.css'
import {
	Box,
	Button,
	Stack,
	Title,
} from '@/shared/ui'

type ComponentsSidebarProps = {
	components: Component[],
	selectedComponent: string,
	onComponentSelect: (componentId: string) => void,
}

// TODO: После реализации списка заиспользовать его здесь
function ComponentsSidebar({
	components,
	selectedComponent,
	onComponentSelect,
}: ComponentsSidebarProps) {
	return (
		<Box
			component="aside"
			bg="#f8f9fa"
			px={24}
			py={24}
			className={styles.sidebar}
		>
			<Stack gap={12}>
				<Title order={3}>{'Компоненты'}</Title>
				<Stack gap={4}>
					{components.map(component => (
						<Button
							key={component.id}
							variant="subtle"
							size="sm"
							disabled={selectedComponent === component.id}
							onClick={() => onComponentSelect(component.id)}
						>
							{component.name}
						</Button>
					))}
				</Stack>
			</Stack>
		</Box>
	)
}

export {
	ComponentsSidebar,
}
