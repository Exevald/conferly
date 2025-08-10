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
					fallbackSrc="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=160&fit=crop"
				/>
			</div>
			<Stack
				gap="sm"
				pt="sm"
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
