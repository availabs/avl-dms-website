import React from "react"

const PageConfig = {
  app: "avlComponentsWebsite",  // -- This refers to a AUTH PROJECT
  type: "page", //  -- Unique Name for this project denoting dataType
  attributes: [
    { key: "title",
      type: "text",
      required: true
    },
    { key: "body",
      type: "richtext",
      required: true
    }
  ]
}

export default {
  path: "/avl",
  exact: false,
  auth: false,
  mainNav: true,
  name: 'Home',
  component: {
    type: "dms-content",
    wrappers: [
    // wrapper order is important
    // from index zero to i, higher index wrappers send props into lower index wrappers
    // higher index wrappers do not see props from lower index wrappers
    "dms-manager",
    "dms-provider",
    "dms-router",
    "show-loading",
    "dms-falcor",
    "with-auth"
    ],
    props: {
      format: PageConfig,
      title: " ",
    },
    children: [
      { type: "dms-header",
      },
      { 
        type: "dms-table",
        props: {
          dmsAction: "list",
          columns: [
            { path: "self:data.title",
              filter: "fuzzyText"
            },
            "dms:edit",
            "dms:delete"
          ],
        }
      },
      { type: "dms-create",
        props: { dmsAction: "create" },
        // dms-create defaults to dmsAction: "create"
        // the prop is required here due to the wrapper
        wrappers: ["with-auth"]
      },
      { type: "dms-edit",
        props: { dmsAction: "edit" },
        wrappers: ["with-auth"]
      },
    ]
  },
  layout: 'Simple',
  layoutSettings: {
    fixed: true,
    nav: 'top',
    headerBar: true,
    theme: 'light'
  }
}
