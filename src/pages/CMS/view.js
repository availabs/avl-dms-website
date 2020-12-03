import { /*docsPage, docsSection,*/ shmpDoc } from './docs.type'
//import SectionManager from './components/SectionManager'
//import PageEdit from './components/PageEdit'
import PageView from './components/PageView'



let config = {
  type: "dms-manager", // top level component for managing data items
  wrappers: [
  "dms-manager",
    "dms-provider",
    "dms-falcor",
    "dms-router"
  ],
  props: {
    format: shmpDoc,
    title: " ",
    className: 'h-full',
    noHeader: true
  },
  children: [
    { type: PageView,
      dmsAction: "view"
    },
  ]
}

export default [{
  path: "/",
  mainNav: true,
  exact: true,
  auth: false,
  name: 'Mitigate NY',
  icon: '',
  layout: 'Simple',
  component: config
},
{
  path: "/p",
  mainNav: false,
  exact: false,
  auth: false,
  name: 'Home',
  icon: '',
  layout: 'Simple',
  component: config
}]
