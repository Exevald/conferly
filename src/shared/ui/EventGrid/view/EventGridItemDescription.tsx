import {type Event} from '@/entities/Event'
import {Text} from '@/shared/ui/Text/Text'

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
