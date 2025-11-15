import {
	type Event,
	getTypeColor,
	getTypeLabel,
} from '@/entities/Event'
import {Badge, Group} from '@/shared/ui'

type EventGridItemBadgesProps = {
	event: Event,
}

function EventGridItemBadges({
	event,
}: EventGridItemBadgesProps) {
	return (
		<Group
			gap={4}
			wrap={true}
		>
			<Badge
				color={getTypeColor(event.type)}
				size="sm"
			>
				{getTypeLabel(event.type)}
			</Badge>
			<Badge
				color="gray"
				size="sm"
			>
				{event.attendees} {'участников'}
			</Badge>
		</Group>
	)
}

export {
	EventGridItemBadges,
}
