import {
	Badge,
	Group,
	Title,
} from '@mantine/core'
import {type Event} from '@/entities/Event'
import {colors} from '@/shared/ui/design-system'

type EventCardHeaderProps = {
	event: Event,
}

function EventCardHeader({
	event,
}: EventCardHeaderProps) {
	return (
		<Group
			justify="space-between"
			align="center"
		>
			<Title
				order={3}
				size="h4"
				lineClamp={2}
				c={colors.text.primary}
			>
				{event.name}
			</Title>
			{event.isUpcoming && (
				<Badge
					color="red"
					variant="light"
					size="sm"
				>
					{'Скоро'}
				</Badge>
			)}
		</Group>
	)
}

export {
	EventCardHeader,
}
