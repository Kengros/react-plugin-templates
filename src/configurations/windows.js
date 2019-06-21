export const config = [
    {
        zone: 'breadcrumb',
        plugin: 'breadcrumb/windows.breadcrumb',
        props: {
            crumbs: ['Home', 'Text Search', 'Custom Windows']
        }
    },
    {
        zone: 'gallery',
        plugin: 'gallery/windows.gallery',
        props: {
            text: 'This gallery is customized for windows'
        }
    },
    {
        zone: 'details',
        plugin: 'details/windows.details',
        props: {
            productName: 'American Craftsman'
        }
    },
    {
        zone: 'section',
        plugin: 'section/windows.section',
        props: {
            header: 'Colors'
        }
    },
    {
        zone: 'section',
        plugin: 'section/windows.section',
        props: {
            header: 'Product Overview'
        }
    },
    {
        zone: 'section',
        plugin: 'section/windows.section',
        props: {
            header: 'Specifications'
        }
    },
    {
        zone: 'section',
        plugin: 'section/windows.section',
        props: {
            header: 'Questions & Answers'
        }
    },
    {
        zone: 'section',
        plugin: 'section/windows.section',
        props: {
            header: 'Customer Reviews'
        }
    }
];