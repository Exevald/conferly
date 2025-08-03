import {
	Badge,
	Container,
	Group,
	SimpleGrid,
	Stack,
	Text,
	Title,
} from '@mantine/core'
import {IconCalendarOff} from '@tabler/icons-react'
import {mockEvents} from '@/shared/lib/mock-data'
import {colors} from '@/shared/ui/design-system'
import EmptyState from '@/shared/ui/EmptyState'
import EventCard from '@/shared/ui/EventCard'

function HomePage() {
	const allEvents = mockEvents
	const upcomingEvents = allEvents.filter(e => e.isUpcoming)
	const otherEvents = allEvents.filter(e => !e.isUpcoming)

	return (
		<Container
			size="lg"
			py="xl"
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
				{upcomingEvents.length > 0 && (
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
								{'Скоро\r'}
							</Title>
							<Badge
								color="red"
								variant="light"
								size="lg"
							>
								{upcomingEvents.length} {'событий\r'}
							</Badge>
						</Group>
						<SimpleGrid
							cols={{
								base: 1,
								sm: 2,
								lg: 3,
							}}
							spacing="lg"
							verticalSpacing="lg"
						>
							{upcomingEvents.map(event => (
								<EventCard
									key={event.id}
									event={event}
								/>
							))}
						</SimpleGrid>
					</Stack>
				)}
				{otherEvents.length > 0
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
									{'Все события\r'}
								</Title>
								<Badge
									color="gray"
									variant="light"
									size="lg"
								>
									{otherEvents.length} {'событий\r'}
								</Badge>
							</Group>
							<SimpleGrid
								cols={{
									base: 1,
									sm: 2,
									lg: 3,
								}}
								spacing="lg"
								verticalSpacing="lg"
							>
								{otherEvents.map(event => (
									<EventCard
										key={event.id}
										event={event}
									/>
								))}
							</SimpleGrid>
						</Stack>
					)
					: (
						<EmptyState
							title="Нет событий"
							description="Пока нет добавленных событий"
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
