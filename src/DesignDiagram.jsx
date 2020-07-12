import ForgeUI, {
  useState,
  Text,
  Fragment,
  ButtonSet,
  Button,
  Form,
  Select,
  Option,
  TextArea,
  TextField,
  ModalDialog,
} from '@forge/ui';

import { useIssueProperty } from '@forge/ui-jira';

import HTML from './HTML'
import Diagram from './Diagram'
import Templates from './Templates'

const DesignDiagram = ({page, onClose, pages, setPages}) => {
	const [isRemoveModalOpen, setRemoveModalOpen] = useState(false)
	const [pageDesign, setPageDesign] = useState(page && page.design || '')
	const [pageTemplate, setPageTemplate] = useState('own')
	const [pageName, setPageName] = useState(page && page.name || '')
	const [editedPage, setEditedPage] = useState(() => {return {content:pageDesign}})

	const templates = Templates.getAll()

	const uuidv4 = () => {
	  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
	    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
	    return v.toString(16);
	  });
	}

	const parseDesign = (design) => {
		setEditedPage({content: design})
	}

	const parseFormData = (formData) => {
		setPageName(formData.name)

		let design = formData.design

		if (formData.template != 'own' && formData.template != pageTemplate) {
			let template = Templates.getById(formData.template)

			if (template) {
				design = template
			}
		}

		setPageTemplate(formData.template)
		setPageDesign(design)
		parseDesign(design)

		return formData
	}

	const savePage = async function() {
		let viewPageAfter = null
		let newPages = pages;
		if (page && page.id) {
			newPages = pages.map(item => {
				if (item.id == page.id) {
					let newPage = {
						name: pageName,
						design: pageDesign
					}
					viewPageAfter = Object.assign(item, newPage)

					return viewPageAfter
				}
				return item
			})
		} else {
			let newPage = {
				id: uuidv4(),
				name: pageName,
				design: pageDesign
			}
			newPages = [...pages, newPage]
			viewPageAfter = newPage
		}

		await setPages(newPages)
		onClose(viewPageAfter)
	}

	const removePage = async function() {
		let newPages = pages.filter(item => item.id != page.id)
		await setPages(newPages)

		if (newPages.length > 0) {
			onClose(newPages[0])
		} else {
			onClose(null)
		}
	}

	return (
		<Fragment>
			{page && <HTML.H1 text={'Editing ' + page.name}/>}
			{!page && <HTML.H1 text="Adding diagram"/>}

			<Form onSubmit={(formData) => parseFormData(formData)} submitButtonText="Preview">
				<TextField autoComplete="off" label="Name" name="name" defaultValue={pageName}/>
				<Select label="Template" name="template">
					{templates.map(template => (
						<Option defaultSelected={template.selected} label={template.name} value={template.id} />
					))}
				</Select>
          		<TextArea autoComplete="off"  label="Diagram design" name="design" defaultValue={pageDesign}/>
        	</Form>

        	{isRemoveModalOpen && (
	        <ModalDialog header="Do you confirm removing the diagram?" onClose={() => setRemoveModalOpen(false)}>
	          <Form
	          	submitButtonText="Remove"
	            onSubmit={data => {
	              setRemoveModalOpen(false)
	              return removePage()
	            }}
	          >
	          </Form>
	        </ModalDialog>
	        )}

        	<Diagram page={editedPage}/>

        	<HTML.HR/>
        	<ButtonSet>
				<Button onClick={() => savePage()} text="Save"/>
				<Button onClick={() => onClose(page)} text="Close"/>
				{page && page.id && <Button onClick={() => setRemoveModalOpen(true)} text="Remove"/>}

			</ButtonSet>
		</Fragment>
	)
}

export default DesignDiagram