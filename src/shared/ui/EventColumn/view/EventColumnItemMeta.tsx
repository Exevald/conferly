import {Group, Text} from '@mantine/core'
import {IconCalendar, IconMapPin} from '@tabler/icons-react'
import {type Event} from '@/entities/Event'
import {colors} from '@/shared/ui/design-system'

type EventColumnItemMetaProps = {
	event: Event,
}

function EventColumnItemMeta({
	event,
}: EventColumnItemMetaProps) {
	return (
		<Group
			gap="xs"
			c={colors.text.secondary}
		>
			<Group gap="xs">
				<IconCalendar size={18} />
				<Text size="md">
					{event.date}
				</Text>
			</Group>
			<Group gap="xs">
				<IconMapPin size={18} />
				<Text size="md">
					{event.location}
				</Text>
			</Group>
		</Group>
	)
}

export {
	EventColumnItemMeta,
}
