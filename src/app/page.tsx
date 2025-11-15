import {mockEvents} from '@/shared/lib/mock-data'
import {
	Badge,
	Container,
	EmptyState,
	EventColumn,
	EventGrid,
	EventList,
	Group,
	IconCalendarOff,
	Stack,
	Text,
	Title,
	ViewModeToggle,
} from '@/shared/ui'
import {colors} from '@/shared/ui/design-system'
import {type ViewMode} from '@/shared/ui/ViewModeToggle/ViewModeToggle'

type HomePageProps = {
	searchParams: Promise<{view?: string}>,
}

async function HomePage({searchParams}: HomePageProps) {
	const allEvents = mockEvents
	const params = await searchParams
	const viewMode = (params.view as ViewMode) || 'rows'

	const renderEvents = (events: typeof allEvents, mode: ViewMode) => {
		switch (mode) {
			case 'list':
				return <EventList events={events} />
			case 'grid':
				return <EventGrid events={events} />
			default:
				return <EventColumn events={events} />
		}
	}

	return (
		<Container
			size="lg"
			py={48}
			flex="1"
		>
			<Stack gap={24}>
				<Stack
					gap={12}
					textAlign="center"
				>
					<Title
						order={1}
						color="primary"
						align="center"
					>
						{'TODO: Заполнить место над списком\r'}
					</Title>
					<Text
						size="lg"
						color="secondary"
						align="center"
						maxWidth={600}
						margin="0 auto"
					>
						{'Какой-то умный абзац, воодушевляющий тебя на обучение и развитие\r'}
					</Text>
				</Stack>
				{allEvents.length > 0
					? (
						<Stack gap={16}>
							<Group
								justify="apart"
								align="center"
							>
								<Title
									order={2}
									color="primary"
								>
									{'Ближайшие мероприятия\r'}
								</Title>
								<Group
									gap={12}
									align="center"
								>
									<Badge
										color="gray"
										size="lg"
									>
										{allEvents.length} {'мероприятий\r'}
									</Badge>
									<ViewModeToggle
										viewMode={viewMode}
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
									style={{color: colors.text.muted}}
								/>
							)}
						/>
					)}
			</Stack>
		</Container>
	)
}

export default HomePage
