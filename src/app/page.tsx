import {Title, Text, Container, SimpleGrid, Stack, Badge, Group} from '@mantine/core'
import {colors} from '@/shared/ui/design-system'
import EventCard from '@/shared/ui/EventCard'
import {mockEvents} from '@/shared/lib/mock-data'

function HomePage() {
    const upcomingEvents = mockEvents.filter(e => e.isUpcoming)
    const allEvents = mockEvents.filter(e => !e.isUpcoming)

    return (
        <Container
            size="lg"
            py="xl"
        >
            <Stack gap="xl">
                <Stack gap="md" ta="center">
                    <Title
                        order={1}
                        size="h2"
                        c={colors.text.primary}
                    >
                        TODO: Заполнить место над списком
                    </Title>
                    <Text
                        size="lg"
                        c={colors.text.secondary}
                        maw={600}
                        mx="auto"
                    >
                        Какой-то умный абзац, воодушевляющий тебя на обучение и развитие
                    </Text>
                </Stack>
                {/* TODO: Добавить EmptyState */}
                {upcomingEvents.length > 0 && (
                    <Stack gap="lg">
                        <Group justify="space-between" align="center">
                            <Title
                                order={2}
                                size="h3"
                                c={colors.text.primary}
                            >
                                Скоро
                            </Title>
                            <Badge
                                color="red"
                                variant="light"
                                size="lg"
                            >
                                {upcomingEvents.length} событий
                            </Badge>
                        </Group>
                        <SimpleGrid
                            cols={{base: 1, sm: 2, lg: 3}}
                            spacing="lg"
                            verticalSpacing="lg"
                        >
                            {upcomingEvents.map((event) => (
                                <EventCard
                                    key={event.id}
                                    event={event}
                                />
                            ))}
                        </SimpleGrid>
                    </Stack>
                )}
                {/* TODO: Добавить EmptyState */}
                {allEvents.length > 0 && (
                    <Stack gap="lg">
                        <Group justify="space-between" align="center">
                            <Title
                                order={2}
                                size="h3"
                                c={colors.text.primary}
                            >
                                Все события
                            </Title>
                            <Badge
                                color="gray"
                                variant="light"
                                size="lg"
                            >
                                {allEvents.length} событий
                            </Badge>
                        </Group>
                        <SimpleGrid
                            cols={{base: 1, sm: 2, lg: 3}}
                            spacing="lg"
                            verticalSpacing="lg"
                        >
                            {allEvents.map((event) => (
                                <EventCard
                                    key={event.id}
                                    event={event}
                                />
                            ))}
                        </SimpleGrid>
                    </Stack>
                )}
            </Stack>
        </Container>
    )
}

export default HomePage 