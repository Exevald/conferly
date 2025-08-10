import {type Event} from '@/entities/Event'
import {
	Badge,
	Group,
	Title,
} from '@/shared/ui'

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
