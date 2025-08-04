import {Card} from '@mantine/core'
import Link from 'next/link'
import styles from './EventList.module.css'
import {EventHeader} from './view/EventHeader'
import {EventMeta} from './view/EventMeta'
import {type Event} from '@/entities/Event'
import {Stack} from '@/shared/ui/Stack/Stack'

type EventListItemProps = {
	event: Event,
}

function EventListItem({
	event,
}: EventListItemProps) {
	return (
		<Card
			component={Link}
			href={`/events/${event.id}`}
			shadow="sm"
			padding="md"
			radius="md"
			withBorder={true}
			style={{
				textDecoration: 'none',
				color: 'inherit',
				cursor: 'pointer',
			}}
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
