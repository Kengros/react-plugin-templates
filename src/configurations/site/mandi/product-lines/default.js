export const config = [
    {
        type: 'pip',
        plugin: 'pip/pip.component.jsx',
        zones: [
            {
                zone: 'breadcrumb',
                plugin: 'components/breadcrumb/default.breadcrumb',
                props: {
                    crumbs: ['Home', 'Text Search', 'Default']
                }
            },
            {
                zone: 'gallery',
                plugin: 'components/gallery/default.gallery',
                props: {
                    text: 'This is the default gallery'
                }
            },
            {
                zone: 'details',
                plugin: 'components/details/default.details',
                props: {
                    productName: ''
                }
            },
            {
                zone: 'section',
                plugin: 'components/section/default.section',
                props: {
                    header: 'Colors'
                }
            },
            {
                zone: 'section',
                plugin: 'components/section/default.section',
                props: {
                    header: 'Product Overview'
                }
            },
            {
                zone: 'section',
                plugin: 'components/section/default.section',
                props: {
                    header: 'Specifications'
                }
            },
            {
                zone: 'section',
                plugin: 'components/section/default.section',
                props: {
                    header: 'Questions & Answers'
                }
            },
            {
                zone: 'section',
                plugin: 'components/section/default.section',
                props: {
                    header: 'Customer Reviews'
                }
            }
        ]
    },
    {
        type: 'pcp',
        plugin: 'templates/pcp/pcp.component.jsx',
        zones: []
    },
    {
        type: 'plp',
        plugin: 'templates/plp/plp.component.jsx',
        zones: []
    },
    {
        type: 'design',
        plugin: 'templates/design/design.component.jsx',
        zones: []
    }
]