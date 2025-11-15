import styles from './EventColumnItem.module.css'
import {EventColumnItemBadges} from './view/EventColumnItemBadges'
import {EventColumnItemDescription} from './view/EventColumnItemDescription'
import {EventColumnItemHeader} from './view/EventColumnItemHeader'
import {EventColumnItemMeta} from './view/EventColumnItemMeta'
import {type Event} from '@/entities/Event'
import {
	Card,
	Image,
	Stack,
} from '@/shared/ui'

type EventColumnItemProps = {
	event: Event,
}

function EventColumnItem({
	event,
}: EventColumnItemProps) {
	return (
		<Card
			href={`/events/${event.id}`}
			shadow="lg"
			padding="lg"
			radius="lg"
			withBorder={true}
			className={styles.eventColumnItem}
		>
			<div className={styles.imageContainer}>
				<Image
					src={event.image}
					height={240}
					alt={event.name}
					fallbackSrc="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='240'%3E%3Crect fill='%236B7280' width='400' height='240'/%3E%3Ctext fill='%23FFFFFF' font-family='Arial' font-size='20' x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle'%3EEvent%3C/text%3E%3C/svg%3E"
				/>
			</div>
			<Stack
				gap={12}
				pt={24}
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
