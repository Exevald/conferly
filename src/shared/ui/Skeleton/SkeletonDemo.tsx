import {
	Skeleton,
	Stack,
	Title,
} from '@/shared/ui'


function SkeletonDemo() {
	return (
		<Stack gap={16}>
			<Title order={4}>{'Текст'}</Title>
			<Stack gap={8}>
				<Skeleton height={20} />
				<Skeleton
					height={16}
					width="70%"
				/>
				<Skeleton
					height={16}
					width="50%"
				/>
			</Stack>
			<Title order={4}>{'Прямоугольник'}</Title>
			<Skeleton
				height={100}
				width={200}
			/>
		</Stack>
	)
}

export {
	SkeletonDemo,
}
