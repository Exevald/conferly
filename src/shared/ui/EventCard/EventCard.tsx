import {
	Card,
	Image,
	Stack,
} from '@mantine/core'
import Link from 'next/link'
import styles from './EventCard.module.css'
import {EventCardBadges} from './view/EventCardBadges'
import {EventCardDescription} from './view/EventCardDescription'
import {EventCardHeader} from './view/EventCardHeader'
import {EventCardMeta} from './view/EventCardMeta'
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
				cursor: 'pointer',
			}}
			className={styles.eventCard}
		>
			<div className={styles.imageContainer}>
				<Image
					src={event.image}
					height={160}
					alt={event.name}
					fallbackSrc="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=160&fit=crop"
				/>
			</div>
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

export {
	EventCard,
}
