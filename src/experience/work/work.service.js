function WorkService() {
    async function readAllWork() {
        const baseUri = 'https://experience.portfolio.dev.aidsbooger.com';

        return await fetch(`${baseUri}/experience/work`, {
            headers: {
                'Accept': 'text/json'
            }
        });
    }

    return { readAllWork };
}

export default WorkService;