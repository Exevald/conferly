import styles from './EventGridItem.module.css'
import {EventGridItemBadges} from './view/EventGridItemBadges'
import {EventGridItemDescription} from './view/EventGridItemDescription'
import {EventGridItemHeader} from './view/EventGridItemHeader'
import {EventGridItemMeta} from './view/EventGridItemMeta'
import {type Event} from '@/entities/Event'
import {
	Card,
	Image,
	Stack,
} from '@/shared/ui'

type EventGridItemProps = {
	event: Event,
}

function EventGridItem({
	event,
}: EventGridItemProps) {
	return (
		<Card
			href={`/events/${event.id}`}
			shadow="sm"
			padding="lg"
			radius="lg"
			withBorder={true}
			className={styles.eventGridItem}
		>
			<div className={styles.imageContainer}>
				<Image
					src={event.image}
					height={160}
					alt={event.name}
					fallbackSrc="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='160'%3E%3Crect fill='%236B7280' width='400' height='160'/%3E%3Ctext fill='%23FFFFFF' font-family='Arial' font-size='20' x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle'%3EEvent%3C/text%3E%3C/svg%3E"
				/>
			</div>
			<Stack
				gap={8}
				pt={16}
			>
				<EventGridItemHeader event={event} />
				<EventGridItemDescription event={event} />
				<EventGridItemBadges event={event} />
				<EventGridItemMeta event={event} />
			</Stack>
		</Card>
	)
}

export {
	EventGridItem,
}
