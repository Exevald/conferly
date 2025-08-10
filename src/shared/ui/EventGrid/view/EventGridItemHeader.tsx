import {
	type Event,
	getTypeColor,
	getTypeLabel,
} from '@/entities/Event'
import {
	Badge,
	Group,
	Title,
} from '@/shared/ui'

type EventGridItemHeaderProps = {
	event: Event,
}

function EventGridItemHeader({
	event,
}: EventGridItemHeaderProps) {
	return (
		<Group
			justify="apart"
			align="center"
		>
			<Title
				order={3}
				color="primary"
				lineClamp={2}
			>
				{event.name}
			</Title>
			<Badge
				color={getTypeColor(event.type)}
				size="sm"
			>
				{getTypeLabel(event.type)}
			</Badge>
		</Group>
	)
}

export {
	EventGridItemHeader,
}
