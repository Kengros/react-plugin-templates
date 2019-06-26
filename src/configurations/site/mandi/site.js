export const config = [
    {
        type: 'project',
        // plugin: 'templates/pcp/pcp.component.jsx',
        plugin: 'templates/project/project.component.jsx',
        // plugin: 'templates/design/design.component.jsx',
        zones: [
            {
                zone: 'breadcrumb',
                plugin: 'components/breadcrumb/countertops.breadcrumb',
                props: {
                    crumbs: ['Home', 'Kitchen', 'Countertops', 'Custom Countertops']
                }
            },
            {
                zone: 'gallery',
                plugin: 'components/gallery/countertops.gallery',
                props: {
                    text: 'This gallery has no images?'
                }
            },
            {
                zone: 'details',
                plugin: 'components/details/countertops.details',
                props: {
                    productName: 'Granite Countertop'
                }
            },
            {
                zone: 'section',
                plugin: 'components/section/countertops.section',
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
                plugin: 'components/section/countertops.section',
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
    }
]