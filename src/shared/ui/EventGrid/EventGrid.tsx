import {SimpleGrid} from '@mantine/core'
import {EventGridItem} from './EventGridItem'
import {type Event} from '@/entities/Event'

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
				<EventGridItem
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
