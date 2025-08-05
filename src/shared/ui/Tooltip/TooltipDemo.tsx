import {Button} from '@/shared/ui/Button/Button'
import {Group} from '@/shared/ui/Group/Group'
import {Stack} from '@/shared/ui/Stack/Stack'
import {Title} from '@/shared/ui/Title/Title'
import {Tooltip} from '@/shared/ui/Tooltip/Tooltip'

function TooltipDemo() {
	return (
		<Stack gap="lg">
			<Title order={2}>{'Tooltip - Базовый'}</Title>
			<Tooltip content="Это подсказка">
				<Button>{'Наведи на меня'}</Button>
			</Tooltip>
			<Title order={2}>{'Tooltip - Позиции'}</Title>
			<Group>
				<Tooltip
					content="Сверху"
					position="top"
				>
					<Button>{'Top'}</Button>
				</Tooltip>
				<Tooltip
					content="Снизу"
					position="bottom"
				>
					<Button>{'Bottom'}</Button>
				</Tooltip>
				<Tooltip
					content="Слева"
					position="left"
				>
					<Button>{'Left'}</Button>
				</Tooltip>
				<Tooltip
					content="Справа"
					position="right"
				>
					<Button>{'Right'}</Button>
				</Tooltip>
			</Group>
			<Title order={2}>{'Tooltip - Длинный текст'}</Title>
			<Tooltip
				content="Это очень длинная подсказка, которая должна переноситься на новую строку, если текст не помещается в одну строку"
				multiline={true}
			>
				<Button>{'Длинный tooltip'}</Button>
			</Tooltip>
		</Stack>
	)
}

export {
	TooltipDemo,
}
