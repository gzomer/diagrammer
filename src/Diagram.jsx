import ForgeUI, {
  Text,
  Fragment,
  ButtonSet,
  Button,
  Image,
  useState
} from '@forge/ui';

import { useIssueProperty } from '@forge/ui-jira';

import SVGView from './SVGView'
import HTML from './HTML'

const Diagram = ({page, onEdit, gotoPage}) => {

	const pageBase64 = Buffer.from(page.content || '').toString('base64')

	const url = `https://mermaid.ink/img/${pageBase64}`

	return (
		<Fragment>
			{onEdit && <HTML.H2 text={page.name}/>}
			{page.content && <Image src={url}/>}
			{onEdit && <Button onClick={() => onEdit(page)} text="Edit"/>}
		</Fragment>
	)
}

export default Diagram