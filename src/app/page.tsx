import {Title, Text, Container, SimpleGrid, Stack, Badge, Group} from '@mantine/core'
import {IconCalendarOff} from '@tabler/icons-react'
import {colors} from '@/shared/ui/design-system'
import EventCard from '@/shared/ui/EventCard'
import EmptyState from '@/shared/ui/EmptyState'
import {mockEvents} from '@/shared/lib/mock-data'

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
                {otherEvents.length > 0 ? (
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
                                {otherEvents.length} событий
                            </Badge>
                        </Group>
                        <SimpleGrid
                            cols={{base: 1, sm: 2, lg: 3}}
                            spacing="lg"
                            verticalSpacing="lg"
                        >
                            {otherEvents.map((event) => (
                                <EventCard
                                    key={event.id}
                                    event={event}
                                />
                            ))}
                        </SimpleGrid>
                    </Stack>
                ) : (
                    <EmptyState
                        title="Нет событий"
                        description="Пока нет добавленных событий"
                        icon={<IconCalendarOff size={40} color={colors.text.muted} />}
                    />
                )}
            </Stack>
        </Container>
    )
}

export default HomePage 