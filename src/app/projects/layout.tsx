import {type PropsWithChildren} from 'react'
import {ManagementSpace} from '@/widgets/projects/ManagementSpace/ManagementSpace'
import {NavigationPanel} from '@/widgets/projects/NavigationPanel/NavigationPanel'

function ProjectsLayout({children}: PropsWithChildren) {
	return (
		<>
			<NavigationPanel />
			<ManagementSpace>
				{children}
			</ManagementSpace>
		</>
	)
}

export default ProjectsLayout
