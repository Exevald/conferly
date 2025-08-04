import {EventColumnItem} from './EventColumnItem'
import {type Event} from '@/entities/Event'
import {SimpleGrid} from '@/shared/ui/SimpleGrid/SimpleGrid'

type EventColumnProps = {
	events: Event[],
}

function EventColumn({
	events,
}: EventColumnProps) {
	return (
		<SimpleGrid
			cols={1}
			spacing="xl"
		>
			{events.map(event => (
				<EventColumnItem
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
