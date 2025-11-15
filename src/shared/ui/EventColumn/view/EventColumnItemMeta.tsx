import {type Event} from '@/entities/Event'
import {Group, Text} from '@/shared/ui'
import {IconCalendar, IconMapPin} from '@/shared/ui/Icons/Icons'

type EventColumnItemMetaProps = {
	event: Event,
}

function EventColumnItemMeta({
	event,
}: EventColumnItemMetaProps) {
	return (
		<Group gap={12}>
			<Group gap={4}>
				<IconCalendar size={16} />
				<Text
					size="sm"
					color="secondary"
				>
					{event.date}
				</Text>
			</Group>
			<Group gap={4}>
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
	EventColumnItemMeta,
}
