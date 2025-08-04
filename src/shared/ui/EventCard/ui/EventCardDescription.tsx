import {Text} from '@mantine/core'
import {type Event} from '@/entities/Event'
import {colors} from '@/shared/ui/design-system'

type EventCardDescriptionProps = {
	event: Event,
}

function EventCardDescription({
	event,
}: EventCardDescriptionProps) {
	return (
		<Text
			size="sm"
			c={colors.text.secondary}
			lineClamp={2}
		>
			{event.description}
		</Text>
	)
}

export {
	EventCardDescription,
}
