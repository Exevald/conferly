import Link from 'next/link'

function HomePage() {
    return (
        <div>
            <h1>Главная</h1>
            <ul>
                <li><Link href="/conferences/1">Конференция 1</Link></li>
                <li><Link href="/conferences/2">Конференция 2</Link></li>
                <li><Link href="/conferences/3">Конференция 3</Link></li>
            </ul>
            <p><Link href="/auth">Войти в систему</Link></p>
        </div>
    )
}

export default HomePage 