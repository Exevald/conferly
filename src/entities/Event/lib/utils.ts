import {type EventType} from '../model/event'

const getTypeColor = (type: EventType) => {
	switch (type) {
		case 'conference':
			return 'blue'
		case 'meetup':
			return 'green'
		case 'lecture':
			return 'orange'
		default:
			return 'gray'
	}
}

const getTypeLabel = (type: EventType) => {
	switch (type) {
		case 'conference':
			return 'Конференция'
		case 'meetup':
			return 'Митап'
		case 'lecture':
			return 'Лекция'
		default:
			return 'Мероприятие'
	}
}

export {
	getTypeColor,
	getTypeLabel,
}
