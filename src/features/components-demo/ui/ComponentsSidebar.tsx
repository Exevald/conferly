import {type Component} from '../model/const'
import styles from './ComponentsSidebar.module.css'
import {Box} from '@/shared/ui/Box/Box'
import {Button} from '@/shared/ui/Button/Button'
import {Stack} from '@/shared/ui/Stack/Stack'
import {Title} from '@/shared/ui/Title/Title'

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
			px="md"
			py="md"
			className={styles.sidebar}
		>
			<Stack gap="md">
				<Title order={3}>{'Компоненты'}</Title>
				<Stack gap="xs">
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
