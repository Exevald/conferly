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
	const name = components.find(component => component.id === selectedComponent)?.name

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
				style={{flex: '1'}}
			>
				<Stack gap="lg">
					<Title order={3}>
						{name}
					</Title>
					<ComponentDemo componentId={selectedComponent} />
				</Stack>
			</Box>
		</>
	)
}

export default ComponentsPage
