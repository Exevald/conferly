import {Image} from '@mantine/core'
import styles from './EventColumnItem.module.css'
import {EventColumnItemBadges} from './view/EventColumnItemBadges'
import {EventColumnItemDescription} from './view/EventColumnItemDescription'
import {EventColumnItemHeader} from './view/EventColumnItemHeader'
import {EventColumnItemMeta} from './view/EventColumnItemMeta'
import {type Event} from '@/entities/Event'
import {Card} from '@/shared/ui/Card/Card'
import {Stack} from '@/shared/ui/Stack/Stack'

type EventColumnItemProps = {
	event: Event,
}

function EventColumnItem({
	event,
}: EventColumnItemProps) {
	return (
		<Card
			href={`/events/${event.id}`}
			shadow="sm"
			padding="lg"
			radius="md"
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
				gap="md"
				pt="md"
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
