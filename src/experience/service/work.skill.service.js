function WorkSkillService() {
    const baseUri = 'https://experience.portfolio.dev.aidsbooger.com';

    async function readWorkSkillsByWorkId(workId) {
        return await fetch(`${baseUri}/experience/work/${workId}/skill`, {
            headers: {
                'Accept': 'text/json'
            }
        });
    }

    return { readWorkSkillsByWorkId };
}

export default WorkSkillService;