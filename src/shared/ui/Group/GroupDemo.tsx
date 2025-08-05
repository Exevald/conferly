import {Button} from '@/shared/ui/Button/Button'
import {Group} from '@/shared/ui/Group/Group'
import {Stack} from '@/shared/ui/Stack/Stack'
import {Title} from '@/shared/ui/Title/Title'

function GroupDemo() {
	return (
		<Stack gap="lg">
			<Title order={2}>{'Group - Горизонтальное расположение'}</Title>
			<Group>
				<Button variant="primary">{'Кнопка 1'}</Button>
				<Button variant="secondary">{'Кнопка 2'}</Button>
				<Button variant="subtle">{'Кнопка 3'}</Button>
			</Group>
		</Stack>
	)
}

export {
	GroupDemo,
}
