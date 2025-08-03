// TODO: Переработать поля
type Event = {
	id: string,
	name: string,
	description: string,
	image: string,
	date: string,
	location: string,
	type: 'conference' | 'meetup' | 'lecture',
	attendees: number,
	isUpcoming?: boolean,
}

type EventType = Event['type']

export {
	type Event,
	type EventType,
}
