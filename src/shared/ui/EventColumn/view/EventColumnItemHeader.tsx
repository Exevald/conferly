import {
	Badge,
	Group,
	Title,
} from '@mantine/core'
import {type Event} from '@/entities/Event'
import {colors} from '@/shared/ui/design-system'

type EventColumnItemHeaderProps = {
	event: Event,
}

function EventColumnItemHeader({
	event,
}: EventColumnItemHeaderProps) {
	return (
		<Group
			justify="space-between"
			align="center"
		>
			<Title
				order={3}
				size="h3"
				lineClamp={2}
				c={colors.text.primary}
			>
				{event.name}
			</Title>
			{event.isUpcoming && (
				<Badge
					color="red"
					variant="light"
					size="lg"
				>
					{'Скоро'}
				</Badge>
			)}
		</Group>
	)
}

export {
	EventColumnItemHeader,
}
