export const productsStub = [
    {
        id: 'a',
        title: 'a',
        categories: [
            {id: 'a'}
        ]
    },
    {
        id: 'b',
        title: 'b',
        categories: [
            {id: 'a'},
            {id: 'b'}
        ]
    }
];

export const categoriesStub = [
    {id: 'a', title: 'a'},
    {id: 'b', title: 'b'}
];

export const navItemsPropMock = {
    brand: {
        href: 'brand',
        text: 'brand'
    },
    navItems: [
        {
            id: 1,
            href: 'a',
            text: 'a'
        },
        {
            id: 2,
            href: 'b',
            text: 'b'
        },
    ],
    activeLink: 'b'
};