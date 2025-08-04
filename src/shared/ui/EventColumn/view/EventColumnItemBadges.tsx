import {
	type Event,
	getTypeColor,
	getTypeLabel,
} from '@/entities/Event'
import {Badge} from '@/shared/ui/Badge/Badge'
import {Group} from '@/shared/ui/Group/Group'


type EventColumnItemBadgesProps = {
	event: Event,
}

function EventColumnItemBadges({
	event,
}: EventColumnItemBadgesProps) {
	return (
		<Group
			gap="xs"
			wrap={true}
		>
			<Badge
				color={getTypeColor(event.type)}
				size="md"
			>
				{getTypeLabel(event.type)}
			</Badge>
			<Badge
				color="gray"
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
