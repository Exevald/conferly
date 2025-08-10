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

type EventHeaderProps = {
	event: Event,
}

function EventHeader({
	event,
}: EventHeaderProps) {
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
	EventHeader,
}
