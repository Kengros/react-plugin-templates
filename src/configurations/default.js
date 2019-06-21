export const config = [
    {
        zone: 'breadcrumb',
        plugin: 'breadcrumb/default.breadcrumb',
        props: {
            crumbs: ['Home', 'Text Search', 'Default']
        }
    },
    {
        zone: 'gallery',
        plugin: 'gallery/default.gallery',
        props: {
            text: 'This is the default gallery'
        }
    },
    {
        zone: 'details',
        plugin: 'details/default.details',
        props: {
            productName: ''
        }
    },
    {
        zone: 'section',
        plugin: 'section/default.section',
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
        plugin: 'section/default.section',
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