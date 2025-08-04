import {
	Card,
	Image,
	Stack,
} from '@mantine/core'
import Link from 'next/link'
import styles from './EventColumnItem.module.css'
import {EventColumnItemBadges} from './view/EventColumnItemBadges'
import {EventColumnItemDescription} from './view/EventColumnItemDescription'
import {EventColumnItemHeader} from './view/EventColumnItemHeader'
import {EventColumnItemMeta} from './view/EventColumnItemMeta'
import {type Event} from '@/entities/Event'

type EventColumnItemProps = {
	event: Event,
}

function EventColumnItem({
	event,
}: EventColumnItemProps) {
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
			className={styles.eventColumnItem}
		>
			<div className={styles.imageContainer}>
				<Image
					src={event.image}
					height={240}
					alt={event.name}
					fallbackSrc="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=240&fit=crop"
				/>
			</div>
			<Stack
				gap="md"
				mt="lg"
			>
				<EventColumnItemHeader event={event} />
				<EventColumnItemDescription event={event} />
				<EventColumnItemBadges event={event} />
				<EventColumnItemMeta event={event} />
			</Stack>
		</Card>
	)
}

export {
	EventColumnItem,
}
