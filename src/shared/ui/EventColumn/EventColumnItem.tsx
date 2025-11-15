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
					fallbackSrc="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=240&fit=crop"
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
