import {SimpleGrid} from '@mantine/core'
import {type Event} from '@/entities/Event'
import EventCard from '@/shared/ui/EventCard'

type EventGridProps = {
	events: Event[],
}

function EventGrid({
	events,
}: EventGridProps) {
	return (
		<SimpleGrid
			cols={{
				base: 1,
				sm: 2,
				lg: 3,
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
	EventGrid,
}
