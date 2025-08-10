import {type Event} from '@/entities/Event'
import {Group, Text} from '@/shared/ui'
import {IconCalendar, IconMapPin} from '@/shared/ui/Icons/Icons'

type EventGridItemMetaProps = {
	event: Event,
}

function EventGridItemMeta({
	event,
}: EventGridItemMetaProps) {
	return (
		<Group gap="md">
			<Group gap="xs">
				<IconCalendar size={16} />
				<Text
					size="sm"
					color="secondary"
				>
					{event.date}
				</Text>
			</Group>
			<Group gap="xs">
				<IconMapPin size={16} />
				<Text
					size="sm"
					color="secondary"
				>
					{event.location}
				</Text>
			</Group>
		</Group>
	)
}

export {
	EventGridItemMeta,
}
