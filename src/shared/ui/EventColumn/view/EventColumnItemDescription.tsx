import {type Event} from '@/entities/Event'
import {Text} from '@/shared/ui/Text/Text'

type EventColumnItemDescriptionProps = {
	event: Event,
}

function EventColumnItemDescription({
	event,
}: EventColumnItemDescriptionProps) {
	return (
		<Text
			size="md"
			color="secondary"
			lineClamp={2}
		>
			{event.description}
		</Text>
	)
}

export {
	EventColumnItemDescription,
}
