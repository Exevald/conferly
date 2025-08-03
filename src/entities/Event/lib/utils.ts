import {EventType} from '../model/event'

export const getTypeColor = (type: EventType) => {
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

export const getTypeLabel = (type: EventType) => {
    switch (type) {
    case 'conference':
        return 'Конференция'
    case 'meetup':
        return 'Митап'
    case 'lecture':
        return 'Лекция'
    default:
        return 'Событие'
    }
} 