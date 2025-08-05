import {BadgeDemo} from '@/shared/ui/Badge/BadgeDemo'
import {BoxDemo} from '@/shared/ui/Box/BoxDemo'
import {ButtonDemo} from '@/shared/ui/Button/ButtonDemo'
import {CardDemo} from '@/shared/ui/Card/CardDemo'
import {ContainerDemo} from '@/shared/ui/Container/ContainerDemo'
import {GroupDemo} from '@/shared/ui/Group/GroupDemo'
import {SkeletonDemo} from '@/shared/ui/Skeleton/SkeletonDemo'
import {Stack} from '@/shared/ui/Stack/Stack'
import {StackDemo} from '@/shared/ui/Stack/StackDemo'
import {Text} from '@/shared/ui/Text/Text'
import {TextDemo} from '@/shared/ui/Text/TextDemo'
import {TextInputDemo} from '@/shared/ui/TextInput/TextInputDemo'
import {Title} from '@/shared/ui/Title/Title'
import {TitleDemo} from '@/shared/ui/Title/TitleDemo'
import {TooltipDemo} from '@/shared/ui/Tooltip/TooltipDemo'

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
