'use client'

import {useState} from 'react'
import {components} from '@/features/components-demo/model/const'
import {ComponentDemo} from '@/features/components-demo/ui/ComponentDemo'
import {ComponentsSidebar} from '@/features/components-demo/ui/ComponentsSidebar'
import {
	Box,
	Stack,
	Title,
} from '@/shared/ui'

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
				px={32}
				py={24}
				style={{flex: '1'}}
			>
				<Stack gap={16}>
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
