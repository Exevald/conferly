import {Stack} from '@/shared/ui/Stack/Stack'
import {Text} from '@/shared/ui/Text/Text'
import {Title} from '@/shared/ui/Title/Title'

function TextDemo() {
	return (
		<Stack gap="lg">
			<Title order={2}>{'Text - Размеры'}</Title>
			<Stack gap="sm">
				<Text size="xs">{'Extra Small Text'}</Text>
				<Text size="sm">{'Small Text'}</Text>
				<Text size="md">{'Medium Text'}</Text>
				<Text size="lg">{'Large Text'}</Text>
				<Text size="xl">{'Extra Large Text'}</Text>
			</Stack>
			<Title order={2}>{'Text - Цвета'}</Title>
			<Stack gap="sm">
				<Text color="primary">{'Primary Text'}</Text>
				<Text color="secondary">{'Secondary Text'}</Text>
				<Text color="muted">{'Muted Text'}</Text>
			</Stack>
		</Stack>
	)
}

export {
	TextDemo,
}
