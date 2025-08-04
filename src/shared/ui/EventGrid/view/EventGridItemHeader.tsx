import {
	type Event,
	getTypeColor,
	getTypeLabel,
} from '@/entities/Event'
import {Badge} from '@/shared/ui/Badge/Badge'
import {Group} from '@/shared/ui/Group/Group'
import {Title} from '@/shared/ui/Title/Title'


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
				size="h5"
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
