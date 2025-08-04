import {Badge, Group} from '@mantine/core'
import {
	type Event,
	getTypeColor,
	getTypeLabel,
} from '@/entities/Event'

type EventColumnItemBadgesProps = {
	event: Event,
}

function EventColumnItemBadges({
	event,
}: EventColumnItemBadgesProps) {
	return (
		<Group
			gap="xs"
			wrap="wrap"
		>
			<Badge
				color={getTypeColor(event.type)}
				variant="light"
				size="md"
			>
				{getTypeLabel(event.type)}
			</Badge>
			<Badge
				color="gray"
				variant="light"
				size="md"
			>
				{event.attendees} {'участников'}
			</Badge>
		</Group>
	)
}

export {
	EventColumnItemBadges,
}
