'use client'

import {useState} from 'react'
import {components} from '@/features/components-demo/model/const'
import {ComponentDemo} from '@/features/components-demo/ui/ComponentDemo'
import {ComponentsSidebar} from '@/features/components-demo/ui/ComponentsSidebar'
import {Box} from '@/shared/ui/Box/Box'
import {Stack} from '@/shared/ui/Stack/Stack'
import {Title} from '@/shared/ui/Title/Title'

function ComponentsPage() {
	// TODO: Сделать переключение по query params
	const [selectedComponent, setSelectedComponent] = useState('button')

	return (
		<>
			<ComponentsSidebar
				components={components}
				selectedComponent={selectedComponent}
				onComponentSelect={setSelectedComponent}
			/>
			<Box
				px="lg"
				py="md"
			>
				<Stack gap="lg">
					<Title order={1}>
						{'Демонстрация компонентов'}
					</Title>
					<ComponentDemo componentId={selectedComponent} />
				</Stack>
			</Box>
		</>
	)
}

export default ComponentsPage
