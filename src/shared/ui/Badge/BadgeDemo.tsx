import {Badge} from '@/shared/ui/Badge/Badge'
import {Group} from '@/shared/ui/Group/Group'
import {Stack} from '@/shared/ui/Stack/Stack'
import {Title} from '@/shared/ui/Title/Title'

function BadgeDemo() {
	return (
		<Stack gap="lg">
			<Title order={2}>{'Badge - Цвета'}</Title>
			<Group>
				<Badge color="gray">{'Gray'}</Badge>
				<Badge color="red">{'Red'}</Badge>
				<Badge color="blue">{'Blue'}</Badge>
				<Badge color="green">{'Green'}</Badge>
				<Badge color="orange">{'Orange'}</Badge>
			</Group>
			<Title order={2}>{'Badge - Размеры'}</Title>
			<Group>
				<Badge size="xs">{'XS'}</Badge>
				<Badge size="sm">{'SM'}</Badge>
				<Badge size="md">{'MD'}</Badge>
				<Badge size="lg">{'LG'}</Badge>
			</Group>
		</Stack>
	)
}

export {
	BadgeDemo,
}
