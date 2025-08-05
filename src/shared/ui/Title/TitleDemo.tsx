import {Stack} from '@/shared/ui/Stack/Stack'
import {Title} from '@/shared/ui/Title/Title'

function TitleDemo() {
	return (
		<Stack gap="lg">
			<Title order={4}>{'Уровни'}</Title>
			<Stack gap="sm">
				<Title order={1}>{'Heading 1'}</Title>
				<Title order={2}>{'Heading 2'}</Title>
				<Title order={3}>{'Heading 3'}</Title>
				<Title order={4}>{'Heading 4'}</Title>
				<Title order={5}>{'Heading 5'}</Title>
				<Title order={6}>{'Heading 6'}</Title>
			</Stack>
		</Stack>
	)
}

export {
	TitleDemo,
}
