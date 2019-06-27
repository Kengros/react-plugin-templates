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

<i>example: configurations/site/mandi.js</i>
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
<b>Setting Definitions</b>

<i>Product Line</i> - Identifies the product line the configuration was created for.

<i>Type</i> - This setting identifies the type of page the injected component will represent.

<i>Plug-in</i> - The path to the component that will be rendered.

<i>Zones</i> - Additional configurations that specify components that are rendered for various zones within the page.

<i>Props</i> - Props are additional settings that control features of a given component.

### What are templates

Templates are nothing more than components that have predefined zones (placeholders) for dynamically injecting content. The example below represents a template with seven zones whose content is managed by the site configuration. Each zone is identified with a name (breadcrumb, gallery, details, etc) which is referenced by the configuration to specify the plug-in that will be rendered.

![alt text](https://raw.githubusercontent.com/eschall/react-plugin-templates/master/documentation/images/template-example.png)

### Routes

In this POC, all routes are managed by a single dynamic route. The route provides values for site, productline and page which are all used by the templating system to identify which components will be rendered.

```
<Switch>
  <Route exact path="/:site/:productLine/:page/" component={SuspendedComponent()} />
  <Redirect from="*" to="/chuck/countertops/project/" />
</Switch>

...

function SuspendedComponent() {
  return props => (
    <Suspense fallback={<div>Loading...</div>}>
      <SiteContainer {...props} />
    </Suspense>
  );
}
```
