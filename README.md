# react-plugin-templates
Plug-able React templates using [suspense](https://reactjs.org/docs/code-splitting.html#suspense) and [react-universal-component](https://github.com/faceyspacey/react-universal-component) for asnyc rendering dynamically imported components. (Proof of Concept)

### Getting Started

To get started, clone the repo and run npm install to setup the dependencies. Then run npm start to launch the application.

```
npm install
npm start
```

Once the application loads, use the nav links to load the pip with components based on the specified product line.


### How it works
The templating system manages loading all pages and components based on template configurations defined at the site level. The site configuration contains information on how and where all plug-in components will be rendered based on route taken by the user.

example: configurations/site/mandi.js
```
{
  name: 'mandi',
  templates: [
    {
        type: 'pip',
        productLine: 'countertops',
        plugin: 'templates/pip/pip.component.jsx',
        zones: [
            {
                zone: 'breadcrumb',
                plugin: 'components/breadcrumb/default.breadcrumb',
                props: {
                    crumbs: ['Home', 'Projects', 'Pip']
                }
            },
            {
                zone: 'gallery',
                plugin: 'components/gallery/default.gallery',
                props: {
                    text: 'This gallery has no images?'
                }
            },
            {
                zone: 'details',
                plugin: 'components/details/default.details',
                props: {
                    productName: 'Granite Countertop'
                }
            }, ...
        ]
    },
    {
        type: 'pcp',
        productLine: 'countertops',
        plugin: 'templates/pcp/pcp.component.jsx',
        zones: []
    },
    {
        type: 'plp',
        productLine: 'countertops',
        plugin: 'templates/plp/plp.component.jsx',
        zones: []
    }, ...
  ]
}
```
