import {SimpleGrid} from '@mantine/core'
import {type Event} from '@/entities/Event'
import {EventCard} from '@/shared/ui/EventCard/EventCard'

type EventColumnProps = {
	events: Event[],
}

function EventColumn({
	events,
}: EventColumnProps) {
	return (
		<SimpleGrid
			cols={{
				base: 1,
			}}
			spacing="lg"
			verticalSpacing="lg"
		>
			{events.map(event => (
				<EventCard
					key={event.id}
					event={event}
				/>
			))}
		</SimpleGrid>
	)
}

export {
	EventColumn,
}
