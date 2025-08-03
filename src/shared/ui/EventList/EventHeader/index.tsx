import {
	Badge,
	Group,
	Title,
} from '@mantine/core'
import {
	type Event,
	getTypeColor,
	getTypeLabel,
} from '@/entities/Event'
import {colors} from '@/shared/ui/design-system'

type EventHeaderProps = {
	event: Event,
}

function EventHeader({
	event,
}: EventHeaderProps) {
	return (
		<Group
			justify="space-between"
		>
			<Title
				order={3}
				size="h5"
				c={colors.text.primary}
				lineClamp={1}
			>
				{event.name}
			</Title>
			<Group
				gap="xs"
			>
				{event.isUpcoming && (
					<Badge
						size="xs"
						color="red"
						variant="light"
					>
						{'Скоро'}
					</Badge>
				)}
				<Badge
					size="xs"
					color={getTypeColor(event.type)}
					variant="light"
				>
					{getTypeLabel(event.type)}
				</Badge>
			</Group>
		</Group>
	)
}

export {
	EventHeader,
}
