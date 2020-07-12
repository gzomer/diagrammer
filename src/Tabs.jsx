import ForgeUI, {
  Text,
  Fragment,
  ButtonSet,
  Button,
} from '@forge/ui';

import { useIssueProperty } from '@forge/ui-jira';

import HTML from './HTML'

const Tabs = ({viewPage, addPage, pages, viewAll}) => {
	return (
		<Fragment>
			<ButtonSet>
					{pages.map(page => (
						<Button text={page.name} onClick={() => viewPage(page)}/>
					))}
				<Button text='View all' onClick={viewAll}/>
				<Button text='+ Add diagram' onClick={addPage}/>
			</ButtonSet>
			<HTML.HR/>
		</Fragment>
	)
}

export default Tabs