import {EventGridItem} from './EventGridItem'
import {type Event} from '@/entities/Event'
import {SimpleGrid} from '@/shared/ui'

type EventGridProps = {
	events: Event[],
}

function EventGrid({
	events,
}: EventGridProps) {
	return (
		<SimpleGrid
			cols={3}
			spacing="lg"
			breakpoints={{
				xs: 1,
				sm: 2,
				lg: 3,
			}}
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
