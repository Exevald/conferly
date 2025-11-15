import {EventGridItem} from './EventGridItem'
import {type Event} from '@/entities/Event'
import {SimpleGrid} from '@/shared/ui'
import {BREAKPOINTS} from '@/shared/ui/constants'

type EventGridProps = {
	events: Event[],
}

function EventGrid({
	events,
}: EventGridProps) {
	return (
		<SimpleGrid
			cols={3}
			spacing={24}
			breakpoints={[{
				minWidth: BREAKPOINTS.mobile,
				cols: 1,
			},
			{
				minWidth: BREAKPOINTS.tablet,
				cols: 2,
			},
			{
				minWidth: BREAKPOINTS.largeDesktop,
				cols: 3,
			}]}
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
