import {SimpleGrid} from '@mantine/core'
import {EventColumnItem} from './EventColumnItem'
import {type Event} from '@/entities/Event'

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
			spacing="xl"
			verticalSpacing="xl"
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
