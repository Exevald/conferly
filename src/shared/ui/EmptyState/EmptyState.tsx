import {IconInbox} from '@tabler/icons-react'
import {colors} from '@/shared/ui/design-system'
import {Stack} from '@/shared/ui/Stack/Stack'
import {Text} from '@/shared/ui/Text/Text'
import {Title} from '@/shared/ui/Title/Title'

type EmptyStateProps = {
	title: string,
	description: string,
	icon?: React.ReactNode,
}

function EmptyState({
	title, description, icon,
}: EmptyStateProps) {
	return (
		<Stack
			gap="md"
			textAlign="center"
			py="xl"
			px="md"
		>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					width: '80px',
					height: '80px',
					borderRadius: '50%',
					backgroundColor: colors.background.secondary,
					margin: '0 auto',
				}}
			>
				{icon || (
					<IconInbox
						size={40}
						color={colors.text.muted}
					/>
				)}
			</div>
			<Title
				order={3}
				size="h4"
				color="primary"
			>
				{title}
			</Title>
			<Text
				size="lg"
				color="secondary"
				maxWidth={400}
				margin="0 auto"
			>
				{description}
			</Text>
		</Stack>
	)
}

export default EmptyState
