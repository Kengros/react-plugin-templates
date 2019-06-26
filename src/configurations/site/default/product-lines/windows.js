export const config = [
    {
        type: 'pip',
        plugin: 'pip/pip.component.jsx',
        zones: [
            {
                zone: 'breadcrumb',
                plugin: 'x-mocked-libraries/windows/components/breadcrumb/windows.breadcrumb',
                props: {
                    crumbs: ['Home', 'Text Search', 'Custom Windows']
                }
            },
            {
                zone: 'gallery',
                plugin: 'x-mocked-libraries/windows/components/gallery/windows.gallery',
                props: {
                    text: 'This gallery is customized for windows'
                }
            },
            {
                zone: 'details',
                plugin: 'x-mocked-libraries/windows/components/details/windows.details',
                props: {
                    productName: 'American Craftsman'
                }
            },
            {
                zone: 'section',
                plugin: 'x-mocked-libraries/windows/components/section/windows.section',
                props: {
                    header: 'Colors'
                }
            },
            {
                zone: 'section',
                plugin: 'x-mocked-libraries/windows/components/section/windows.section',
                props: {
                    header: 'Product Overview'
                }
            },
            {
                zone: 'section',
                plugin: 'x-mocked-libraries/windows/components/section/windows.section',
                props: {
                    header: 'Specifications'
                }
            },
            {
                zone: 'section',
                plugin: 'x-mocked-libraries/windows/components/section/windows.section',
                props: {
                    header: 'Questions & Answers'
                }
            },
            {
                zone: 'section',
                plugin: 'x-mocked-libraries/windows/components/section/windows.section',
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