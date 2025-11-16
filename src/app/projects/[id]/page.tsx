type ProjectDetailPageProps = {
	params: Promise<{id: string}>,
}

async function ProjectDetailPage({params}: ProjectDetailPageProps) {
	await params
	return null
}

export default ProjectDetailPage
