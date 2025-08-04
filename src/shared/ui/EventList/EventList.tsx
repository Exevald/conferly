import {Card, Stack} from '@mantine/core'
import Link from 'next/link'
import {EventHeader} from './view/EventHeader'
import {EventMeta} from './view/EventMeta'
import {type Event} from '@/entities/Event'

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
				rowGap: '8px',
				textDecoration: 'none',
				color: 'inherit',
				transition: 'transform 0.2s ease, box-shadow 0.2s ease',
				cursor: 'pointer',
			}}
			onMouseEnter={e => {
				e.currentTarget.style.transform = 'translateY(-2px)'
				e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)'
			}}
			onMouseLeave={e => {
				e.currentTarget.style.transform = 'translateY(0)'
				e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)'
			}}
		>
			<EventHeader event={event} />
			<EventMeta event={event} />
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
