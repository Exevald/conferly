import {Group, Text} from '@mantine/core'
import {IconCalendar, IconMapPin} from '@tabler/icons-react'
import {type Event} from '@/entities/Event'
import {colors} from '@/shared/ui/design-system'

type EventGridItemMetaProps = {
	event: Event,
}

function EventGridItemMeta({
	event,
}: EventGridItemMetaProps) {
	return (
		<Group
			gap="xs"
			c={colors.text.secondary}
		>
			<Group gap="xs">
				<IconCalendar size={16} />
				<Text size="sm">
					{event.date}
				</Text>
			</Group>
			<Group gap="xs">
				<IconMapPin size={16} />
				<Text size="sm">
					{event.location}
				</Text>
			</Group>
		</Group>
	)
}

export {
	EventGridItemMeta,
}
