import Link from 'next/link'
import styles from './EventList.module.css'
import {EventHeader} from './view/EventHeader'
import {EventMeta} from './view/EventMeta'
import {type Event} from '@/entities/Event'
import {Card} from '@/shared/ui/Card/Card'
import {Stack} from '@/shared/ui/Stack/Stack'

type EventListItemProps = {
	event: Event,
}

function EventListItem({
	event,
}: EventListItemProps) {
	return (
		<Card
			href={`/events/${event.id}`}
			shadow="sm"
			padding="md"
			radius="lg"
			withBorder={true}
			className={styles.eventListItem}
		>
			<Stack gap="md">
				<EventHeader event={event} />
				<EventMeta event={event} />
			</Stack>
		</Card>
	)
}

type EventListProps = {
	events: Event[],
}

function EventList({
	events,
}: EventListProps) {
	return (
		<Stack gap="xs">
			{events.map(event => (
				<EventListItem
					key={event.id}
					event={event}
				/>
			))}
		</Stack>
	)
}

export {
	EventList,
}
