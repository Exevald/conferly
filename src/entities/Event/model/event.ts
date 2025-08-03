// TODO: Переработать поля
export type Event = {
    id: string
    name: string
    description: string
    image: string
    date: string
    location: string
    type: 'conference' | 'meetup' | 'lecture'
    attendees: number
    isUpcoming?: boolean
}

export type EventType = Event['type'] 