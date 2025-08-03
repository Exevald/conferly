'use client'

import {
	Badge,
	Card,
	Group,
	Image,
	Stack,
	Text,
	Title,
} from '@mantine/core'
import {IconCalendar, IconMapPin} from '@tabler/icons-react'
import Link from 'next/link'
import {
	type Event,
	getTypeColor,
	getTypeLabel,
} from '@/entities/Event'
import {colors} from '@/shared/ui/design-system'

type EventCardProps = {
	event: Event,
}

function EventCard({
	event,
}: EventCardProps) {
	return (
		<Card
			component={Link}
			href={`/events/${event.id}`}
			shadow="sm"
			padding="lg"
			radius="md"
			withBorder={true}
			style={{
				textDecoration: 'none',
				color: 'inherit',
				transition: 'transform 0.2s ease, box-shadow 0.2s ease',
				cursor: 'pointer',
			}}
			onMouseEnter={e => {
				e.currentTarget.style.transform = 'translateY(-4px)'
				e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)'
			}}
			onMouseLeave={e => {
				e.currentTarget.style.transform = 'translateY(0)'
				e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)'
			}}
		>
			<Card.Section>
				<Image
					src={event.image}
					height={160}
					alt={event.name}
					fallbackSrc="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=160&fit=crop"
				/>
			</Card.Section>
			<Stack
				gap="sm"
				mt="md"
			>
				<Group
					justify="space-between"
					align="center"
				>
					<Title
						order={3}
						size="h4"
						lineClamp={2}
						c={colors.text.primary}
					>
						{event.name}
					</Title>
					{event.isUpcoming && (
						<Badge
							color="red"
							variant="light"
							size="sm"
						>
							{'Скоро\r'}
						</Badge>
					)}
				</Group>
				<Text
					size="sm"
					c={colors.text.secondary}
					lineClamp={2}
				>
					{event.description}
				</Text>
				<Group
					gap="xs"
					wrap="wrap"
				>
					<Badge
						color={getTypeColor(event.type)}
						variant="light"
						size="sm"
					>
						{getTypeLabel(event.type)}
					</Badge>
					<Badge
						color="gray"
						variant="light"
						size="sm"
					>
						{event.attendees} {'участников\r'}
					</Badge>
				</Group>
				<Group
					gap="xs"
					c={colors.text.secondary}
				>
					<Group gap="xs">
						<IconCalendar size={16} />
						<Text size="sm">
							{event.date}
						</Text>
					</Group>
					<Group gap="xs">
						<IconMapPin size={16} />
						<Text size="sm">
							{event.location}
						</Text>
					</Group>
				</Group>
			</Stack>
		</Card>
	)
}

export default EventCard
