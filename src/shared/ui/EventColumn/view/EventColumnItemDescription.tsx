import {Text} from '@mantine/core'
import {type Event} from '@/entities/Event'
import {colors} from '@/shared/ui/design-system'

type EventColumnItemDescriptionProps = {
	event: Event,
}

function EventColumnItemDescription({
	event,
}: EventColumnItemDescriptionProps) {
	return (
		<Text
			size="md"
			c={colors.text.secondary}
			lineClamp={2}
		>
			{event.description}
		</Text>
	)
}

export {
	EventColumnItemDescription,
}
