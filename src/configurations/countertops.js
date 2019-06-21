export const config = [
    {
        zone: 'breadcrumb',
        plugin: 'breadcrumb/countertops.breadcrumb',
        props: {
            crumbs: ['Home', 'Kitchen', 'Countertops', 'Custom Countertops']
        }
    },
    {
        zone: 'gallery',
        plugin: 'gallery/countertops.gallery',
        props: {
            text: 'This gallery has no images?'
        }
    },
    {
        zone: 'details',
        plugin: 'details/countertops.details',
        props: {
            productName: 'Granite Countertop'
        }
    },
    {
        zone: 'section',
        plugin: 'section/countertops.section',
        props: {
            header: 'Colors'
        }
    },
    {
        zone: 'section',
        plugin: 'section/default.section',
        props: {
            header: 'Product Overview'
        }
    },
    {
        zone: 'section',
        plugin: 'section/countertops.section',
        props: {
            header: 'Specifications'
        }
    },
    {
        zone: 'section',
        plugin: 'section/default.section',
        props: {
            header: 'Questions & Answers'
        }
    },
    {
        zone: 'section',
        plugin: 'section/default.section',
        props: {
            header: 'Customer Reviews'
        }
    }
];