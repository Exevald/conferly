import {Group, Text} from '@mantine/core'
import {IconCalendar, IconMapPin} from '@tabler/icons-react'
import {type Event} from '@/entities/Event'
import {colors} from '@/shared/ui/design-system'

type EventMetaProps = {
	event: Event,
}

function EventMeta({
	event,
}: EventMetaProps) {
	return (
		<Group
			gap="md"
			c={colors.text.secondary}
		>
			<Group gap="xs">
				<IconCalendar size={14} />
				<Text size="sm">
					{event.date}
				</Text>
			</Group>
			<Group gap="xs">
				<IconMapPin size={14} />
				<Text size="sm">
					{event.location}
				</Text>
			</Group>
			<Text size="sm">
				{event.attendees} {'участников'}
			</Text>
		</Group>
	)
}

export {
	EventMeta,
}
