export const config = [
    {
        type: 'project',
        plugin: 'templates/project/project.component.jsx',
        zones: [
            {
                zone: 'breadcrumb',
                plugin: 'components/breadcrumb/default.breadcrumb',
                props: {
                    crumbs: ['Home', 'Kitchen', 'Countertops', 'Custom Countertops']
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
        type: 'pip',
        productLine: 'countertops',
        plugin: 'templates/pip/pip.component.jsx',
        zones: [
            {
                zone: 'breadcrumb',
                plugin: 'x-mocked-libraries/countertops/components/breadcrumb/countertops.breadcrumb',
                props: {
                    crumbs: ['Home', 'Kitchen', 'Countertops', 'Custom Countertops']
                }
            },
            {
                zone: 'gallery',
                plugin: 'x-mocked-libraries/countertops/components/gallery/countertops.gallery',
                props: {
                    text: 'This gallery has no images?'
                }
            },
            {
                zone: 'details',
                plugin: 'x-mocked-libraries/countertops/components/details/countertops.details',
                props: {
                    productName: 'Granite Countertop'
                }
            },
            {
                zone: 'section',
                plugin: 'x-mocked-libraries/countertops/components/section/countertops.section',
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
                plugin: 'x-mocked-libraries/countertops/components/section/countertops.section',
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
        productLine: 'countertops',
        plugin: 'templates/pcp/pcp.component.jsx',
        zones: []
    },
    {
        type: 'plp',
        productLine: 'countertops',
        plugin: 'templates/plp/plp.component.jsx',
        zones: []
    },
    {
        type: 'design',
        productLine: 'countertops',
        plugin: 'templates/design/design.component.jsx',
        zones: []
    },
    {
        type: 'pip',
        productLine: 'windows',
        plugin: 'pip/pip.component.jsx',
        zones: [
            {
                zone: 'breadcrumb',
                plugin: 'components/breadcrumb/windows.breadcrumb',
                props: {
                    crumbs: ['Home', 'Text Search', 'Custom Windows']
                }
            },
            {
                zone: 'gallery',
                plugin: 'components/gallery/windows.gallery',
                props: {
                    text: 'This gallery is customized for windows'
                }
            },
            {
                zone: 'details',
                plugin: 'components/details/windows.details',
                props: {
                    productName: 'American Craftsman'
                }
            },
            {
                zone: 'section',
                plugin: 'components/section/windows.section',
                props: {
                    header: 'Colors'
                }
            },
            {
                zone: 'section',
                plugin: 'components/section/windows.section',
                props: {
                    header: 'Product Overview'
                }
            },
            {
                zone: 'section',
                plugin: 'components/section/windows.section',
                props: {
                    header: 'Specifications'
                }
            },
            {
                zone: 'section',
                plugin: 'components/section/windows.section',
                props: {
                    header: 'Questions & Answers'
                }
            },
            {
                zone: 'section',
                plugin: 'components/section/windows.section',
                props: {
                    header: 'Customer Reviews'
                }
            }
        ]
    },
    {
        type: 'pcp',
        productLine: 'windows',
        plugin: 'templates/pcp/pcp.component.jsx',
        zones: []
    },
    {
        type: 'plp',
        productLine: 'windows',
        plugin: 'templates/plp/plp.component.jsx',
        zones: []
    },
    {
        type: 'design',
        productLine: 'windows',
        plugin: 'templates/design/design.component.jsx',
        zones: []
    },
    {
        type: 'pip',
        productLine: 'default',
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
        productLine: 'default',
        plugin: 'templates/pcp/pcp.component.jsx',
        zones: []
    },
    {
        type: 'plp',
        productLine: 'default',
        plugin: 'templates/plp/plp.component.jsx',
        zones: []
    },
    {
        type: 'design',
        productLine: 'default',
        plugin: 'templates/design/design.component.jsx',
        zones: []
    }
]