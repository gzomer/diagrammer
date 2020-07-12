import ForgeUI, {
  render,
  useState,
  Button,
  Text,
  Fragment,
  IssuePanel,
} from '@forge/ui';

import api from "@forge/api";
import { useIssueProperty } from '@forge/ui-jira';

import Tabs from './Tabs'
import DesignDiagram from './DesignDiagram'
import Diagram from './Diagram'

const App = () => {
  const [pages, setPages] = useIssueProperty("pages", []);
  const [viewPage, setViewPage] = useState(function() {
    if (pages && pages.length) {
      let page = pages[0]
      page.content = page.design
      return page
    }
    return null
  });

  const [viewPages, setViewPages] = useState(null);
  const [editPage, setEditPage] = useState(null);
  const [addPage, setAddPage] = useState(false);

  const enableAddPage = function() {
    setViewPages(null)
    setAddPage(true)
    setViewPage(null)
  }

  const enableViewPage = function(page) {
    page.content = page.design
    setViewPage(page)
    setViewPages(null)
  }

  const enableEditPage = (page) => {
    setEditPage(page)
    setViewPage(null)
    setViewPages(null)
  }

  const onClose = function(page) {
    setEditPage(null)
    setAddPage(false)
    setViewPages(null)

    if (page) {
      enableViewPage(page)
    }
  }

  const viewAll = function() {
    setEditPage(null)
    setAddPage(false)
    setViewPage(null)

    setViewPages(pages.map(function(page) {
      page.content = page.design
      return page
    }))
  }

  return (
    <Fragment>
      {!editPage && !addPage && <Tabs pages={pages} addPage={() => enableAddPage()} viewAll={viewAll} viewPage={(page) => enableViewPage(page)}/>}
      {viewPage && <Diagram page={viewPage} onEdit={(page) => enableEditPage(page)}/>}

      {viewPages && viewPages.map(page => (
        <Diagram page={page} onEdit={(page) => enableEditPage(page)}/>
      ))}
      {editPage && <DesignDiagram pages={pages} setPages={setPages} page={editPage} onClose={onClose}/>}
      {addPage && <DesignDiagram pages={pages} setPages={setPages} onClose={onClose}/>}
    </Fragment>
  );
};

export const run = render(
  <IssuePanel>
    <App />
  </IssuePanel>
);
