import {IconCalendarOff} from '@tabler/icons-react'
import {mockEvents} from '@/shared/lib/mock-data'
import {Badge} from '@/shared/ui/Badge/Badge'
import {Container} from '@/shared/ui/Container/Container'
import {colors} from '@/shared/ui/design-system'
import EmptyState from '@/shared/ui/EmptyState/EmptyState'
import {EventColumn} from '@/shared/ui/EventColumn/EventColumn'
import {EventGrid} from '@/shared/ui/EventGrid/EventGrid'
import {EventList} from '@/shared/ui/EventList/EventList'
import {Group} from '@/shared/ui/Group/Group'
import {Stack} from '@/shared/ui/Stack/Stack'
import {Text} from '@/shared/ui/Text/Text'
import {Title} from '@/shared/ui/Title/Title'
import {type ViewMode, ViewModeToggle} from '@/shared/ui/ViewModeToggle/ViewModeToggle'

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
			py="xl"
			flex="1"
		>
			<Stack gap="xl">
				<Stack
					gap="md"
					textAlign="center"
				>
					<Title
						order={1}
						size="h2"
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
						<Stack gap="lg">
							<Group
								justify="apart"
								align="center"
							>
								<Title
									order={2}
									size="h3"
									color="primary"
								>
									{'Ближайшие мероприятия\r'}
								</Title>
								<Group gap="md">
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
