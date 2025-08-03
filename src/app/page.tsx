'use client'

import {
	Badge,
	Container,
	Group,
	Stack,
	Text,
	Title,
} from '@mantine/core'
import {IconCalendarOff} from '@tabler/icons-react'
import {useState} from 'react'
import {mockEvents} from '@/shared/lib/mock-data'
import {colors} from '@/shared/ui/design-system'
import EmptyState from '@/shared/ui/EmptyState'
import {EventColumn} from '@/shared/ui/EventColumn'
import {EventGrid} from '@/shared/ui/EventGrid'
import {EventList} from '@/shared/ui/EventList'
import {type ViewMode, ViewModeToggle} from '@/shared/ui/ViewModeToggle'

function HomePage() {
	const allEvents = mockEvents

	const [viewMode, setViewMode] = useState<ViewMode>('grid')

	const renderEvents = (events: typeof allEvents, mode: ViewMode) => {
		switch (mode) {
			case 'list':
				return <EventList events={events} />
			case 'rows':
				return <EventColumn events={events} />
			default:
				return <EventGrid events={events} />
		}
	}

	return (
		<Container
			size="lg"
			py="xl"
			flex="1"
		>
			<Stack gap="xl">
				<Stack
					gap="md"
					ta="center"
				>
					<Title
						order={1}
						size="h2"
						c={colors.text.primary}
					>
						{'TODO: Заполнить место над списком\r'}
					</Title>
					<Text
						size="lg"
						c={colors.text.secondary}
						maw={600}
						mx="auto"
					>
						{'Какой-то умный абзац, воодушевляющий тебя на обучение и развитие\r'}
					</Text>
				</Stack>
				{allEvents.length > 0
					? (
						<Stack gap="lg">
							<Group
								justify="space-between"
								align="center"
							>
								<Title
									order={2}
									size="h3"
									c={colors.text.primary}
								>
									{'Ближайшие мероприятия\r'}
								</Title>
								<Group gap="md">
									<Badge
										color="gray"
										variant="light"
										size="lg"
									>
										{allEvents.length} {'мероприятий\r'}
									</Badge>
									<ViewModeToggle
										viewMode={viewMode}
										onViewModeChange={setViewMode}
										eventCount={allEvents.length}
									/>
								</Group>
							</Group>
							{renderEvents(allEvents, viewMode)}
						</Stack>
					)
					: (
						<EmptyState
							title="Нет мероприятий"
							description="Пока нет добавленных мероприятий"
							icon={(
								<IconCalendarOff
									size={40}
									color={colors.text.muted}
								/>
							)}
						/>
					)}
			</Stack>
		</Container>
	)
}

export default HomePage
