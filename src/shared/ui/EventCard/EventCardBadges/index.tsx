import {Badge, Group} from '@mantine/core'
import {
	type Event,
	getTypeColor,
	getTypeLabel,
} from '@/entities/Event'

type EventCardBadgesProps = {
	event: Event,
}

function EventCardBadges({
	event,
}: EventCardBadgesProps) {
	return (
		<Group
			gap="xs"
			wrap="wrap"
		>
			<Badge
				color={getTypeColor(event.type)}
				variant="light"
				size="sm"
			>
				{getTypeLabel(event.type)}
			</Badge>
			<Badge
				color="gray"
				variant="light"
				size="sm"
			>
				{event.attendees} {'участников'}
			</Badge>
		</Group>
	)
}

export {
	EventCardBadges,
}
