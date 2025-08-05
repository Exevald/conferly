import {Button} from '@/shared/ui/Button/Button'
import {Group} from '@/shared/ui/Group/Group'
import {Stack} from '@/shared/ui/Stack/Stack'
import {Title} from '@/shared/ui/Title/Title'

function ButtonDemo() {
	return (
		<Stack gap="lg">
			<Title order={4}>{'Размеры'}</Title>
			<Group>
				<Button
					size="sm"
					variant="primary"
				>
					{'Small Primary'}
				</Button>
				<Button
					size="md"
					variant="primary"
				>
					{'Medium Primary'}
				</Button>
				<Button
					size="lg"
					variant="primary"
				>
					{'Large Primary'}
				</Button>
			</Group>
			<Title order={4}>{'Варианты'}</Title>
			<Group>
				<Button variant="primary">{'Primary'}</Button>
				<Button variant="secondary">{'Secondary'}</Button>
				<Button variant="subtle">{'Subtle'}</Button>
			</Group>
			<Title order={4}>{'Состояния'}</Title>
			<Group>
				<Button variant="primary">{'Normal'}</Button>
				<Button
					variant="primary"
					disabled={true}
				>
					{'Disabled'}
				</Button>
			</Group>
			<Title order={4}>{'Полная ширина'}</Title>
			<Button
				variant="primary"
				fullWidth={true}
			>
				{'Full Width Button'}
			</Button>
		</Stack>
	)
}

export {
	ButtonDemo,
}
