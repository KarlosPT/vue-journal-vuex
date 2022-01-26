export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: 'Officia non officia laboris incididunt cillum reprehenderit eiusmod eu exercitation reprehenderit.',
            picture: null,
        },
        {
            id: new Date().getTime() + 1000,
            date: new Date().toDateString(),
            text: 'Enim amet incididunt commodo nisi reprehenderit eiusmod minim in commodo.',
            picture: null,
        },
        {
            id: new Date().getTime() + 2000,
            date: new Date().toDateString(),
            text: 'Et voluptate ullamco elit velit nostrud qui sunt.',
            picture: null,
        },
    ]
})