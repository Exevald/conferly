type ConferenceDetailPageProps = {
    params: Promise<{
        id: string
    }>
}

async function ConferenceDetailPage({params}: ConferenceDetailPageProps) {
    const {id} = await params
    
    return (
        <div>
            <h1>Страница конференции</h1>
            <p>ID конференции: {id}</p>
        </div>
    )
}

export default ConferenceDetailPage