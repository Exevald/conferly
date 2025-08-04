
import {type Event} from '@/entities/Event'
import {Badge} from '@/shared/ui/Badge/Badge'
import {Group} from '@/shared/ui/Group/Group'
import {Title} from '@/shared/ui/Title/Title'

type EventColumnItemHeaderProps = {
	event: Event,
}

function EventColumnItemHeader({
	event,
}: EventColumnItemHeaderProps) {
	return (
		<Group
			justify="apart"
			align="center"
		>
			<Title
				order={3}
				size="h3"
				lineClamp={2}
				color="primary"
			>
				{event.name}
			</Title>
			{event.isUpcoming && (
				<Badge
					color="red"
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
