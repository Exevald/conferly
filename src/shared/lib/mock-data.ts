import {Event} from '@/entities/Event'

export const mockEvents: Event[] = [
    {
        id: '1',
        name: 'React Summit 2024',
        description: 'Крупнейшая конференция по React в России. Доклады от ведущих разработчиков, практические мастер-классы и нетворкинг.',
        image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=160&fit=crop',
        date: '15-17 марта 2024',
        location: 'Москва, Крокус Экспо',
        type: 'conference',
        attendees: 1200,
        isUpcoming: true
    },
    {
        id: '2',
        name: 'Frontend Meetup #42',
        description: 'Ежемесячная встреча фронтенд-разработчиков. Обсуждение новых технологий, обмен опытом и живое общение.',
        image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=160&fit=crop',
        date: '28 февраля 2024',
        location: 'Санкт-Петербург, IT-парк',
        type: 'meetup',
        attendees: 150
    },
    {
        id: '3',
        name: 'TypeScript Deep Dive',
        description: 'Продвинутый курс по TypeScript от эксперта. Изучение сложных концепций, паттернов и лучших практик.',
        image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=160&fit=crop',
        date: '10 марта 2024',
        location: 'Онлайн',
        type: 'lecture',
        attendees: 300
    },
    {
        id: '4',
        name: 'DevOps Days 2024',
        description: 'Конференция по DevOps и автоматизации. Практические кейсы, инструменты и методологии современной разработки.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=160&fit=crop',
        date: '5-6 апреля 2024',
        location: 'Казань, Центр современной культуры',
        type: 'conference',
        attendees: 800
    },
    {
        id: '5',
        name: 'Mobile Development Workshop',
        description: 'Интенсивный воркшоп по мобильной разработке. Создание приложений с нуля до публикации в App Store.',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=160&fit=crop',
        date: '20 марта 2024',
        location: 'Екатеринбург, УрФУ',
        type: 'lecture',
        attendees: 200
    },
    {
        id: '6',
        name: 'AI & ML Conference',
        description: 'Конференция по искусственному интеллекту и машинному обучению. Последние достижения и практические применения.',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=160&fit=crop',
        date: '12-14 мая 2024',
        location: 'Новосибирск, Технопарк',
        type: 'conference',
        attendees: 950
    }
] 