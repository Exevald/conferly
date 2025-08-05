import {Card} from '@/shared/ui/Card/Card'
import {Stack} from '@/shared/ui/Stack/Stack'
import {Text} from '@/shared/ui/Text/Text'
import {Title} from '@/shared/ui/Title/Title'

function CardDemo() {
	return (
		<Stack gap="lg">
			<Title order={2}>{'Card - Базовый'}</Title>
			<Card>
				<Text>{'Это базовая карточка с содержимым'}</Text>
			</Card>
			<Title order={2}>{'Card - С заголовком'}</Title>
			<Card>
				<Title order={3}>{'Заголовок карточки'}</Title>
				<Text>{'Содержимое карточки с заголовком'}</Text>
			</Card>
		</Stack>
	)
}

export {
	CardDemo,
}
