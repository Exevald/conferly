import {
	type Event,
	getTypeColor,
	getTypeLabel,
} from '@/entities/Event'
import {Badge} from '@/shared/ui/Badge/Badge'
import {Group} from '@/shared/ui/Group/Group'


type EventGridItemBadgesProps = {
	event: Event,
}

function EventGridItemBadges({
	event,
}: EventGridItemBadgesProps) {
	return (
		<Group
			gap="xs"
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
