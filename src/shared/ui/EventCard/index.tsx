'use client'

import {
	Card,
	Image,
	Stack,
} from '@mantine/core'
import Link from 'next/link'
import {EventCardBadges} from './EventCardBadges'
import {EventCardDescription} from './EventCardDescription'
import {EventCardHeader} from './EventCardHeader'
import {EventCardMeta} from './EventCardMeta'
import {type Event} from '@/entities/Event'

type EventCardProps = {
	event: Event,
}

function EventCard({
	event,
}: EventCardProps) {
	return (
		<Card
			component={Link}
			href={`/events/${event.id}`}
			shadow="sm"
			padding="lg"
			radius="md"
			withBorder={true}
			style={{
				textDecoration: 'none',
				color: 'inherit',
				transition: 'transform 0.2s ease, box-shadow 0.2s ease',
				cursor: 'pointer',
			}}
			onMouseEnter={e => {
				e.currentTarget.style.transform = 'translateY(-4px)'
				e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)'
			}}
			onMouseLeave={e => {
				e.currentTarget.style.transform = 'translateY(0)'
				e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)'
			}}
		>
			<Card.Section>
				<Image
					src={event.image}
					height={160}
					alt={event.name}
					fallbackSrc="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=160&fit=crop"
				/>
			</Card.Section>
			<Stack
				gap="sm"
				mt="md"
			>
				<EventCardHeader event={event} />
				<EventCardDescription event={event} />
				<EventCardBadges event={event} />
				<EventCardMeta event={event} />
			</Stack>
		</Card>
	)
}

export default EventCard
