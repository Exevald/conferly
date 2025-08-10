import {type Event} from '@/entities/Event'
import {Text} from '@/shared/ui'

type EventGridItemDescriptionProps = {
	event: Event,
}

function EventGridItemDescription({
	event,
}: EventGridItemDescriptionProps) {
	return (
		<Text
			size="sm"
			color="secondary"
			lineClamp={2}
		>
			{event.description}
		</Text>
	)
}

export {
	EventGridItemDescription,
}
