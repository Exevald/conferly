import {
	BadgeDemo,
	BoxDemo,
	ButtonDemo,
	CardDemo,
	ContainerDemo,
	GroupDemo,
	SelectListDemo,
	SkeletonDemo,
	Stack,
	StackDemo,
	Text,
	TextDemo,
	TextInputDemo,
	Title,
	TitleDemo,
	TooltipDemo,
} from '@/shared/ui'

type ComponentDemoProps = {
	componentId: string,
}

function ComponentDemo({componentId}: ComponentDemoProps) {
	switch (componentId) {
		case 'button':
			return <ButtonDemo />
		case 'text':
			return <TextDemo />
		case 'title':
			return <TitleDemo />
		case 'card':
			return <CardDemo />
		case 'badge':
			return <BadgeDemo />
		case 'text-input':
			return <TextInputDemo />
		case 'tooltip':
			return <TooltipDemo />
		case 'skeleton':
			return <SkeletonDemo />
		case 'container':
			return <ContainerDemo />
		case 'stack':
			return <StackDemo />
		case 'group':
			return <GroupDemo />
		case 'box':
			return <BoxDemo />
		case 'select-list':
			return <SelectListDemo />
		default:
			return (
				<Stack gap="lg">
					<Title order={2}>{'Компонент '}{componentId}</Title>
					<Text>{'Демонстрация компонента будет добавлена позже'}</Text>
				</Stack>
			)
	}
}

export {
	ComponentDemo,
}
