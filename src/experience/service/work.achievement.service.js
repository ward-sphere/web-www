function WorkAchievementService() {
    const baseUri = 'https://experience.portfolio.dev.aidsbooger.com';

    async function readWorkAchievementById(id) {
        return await fetch(`${baseUri}/experience/work/achievement/${id}`, {
            headers: {
                'Accept': 'text/json'
            }
        });
    }

    async function readWorkAchievementsByWorkId(workId) {
        return await fetch(`${baseUri}/experience/work/${workId}/achievement`, {
            headers: {
                'Accept': 'text/json'
            }
        });
    }

    return { readWorkAchievementById, readWorkAchievementsByWorkId };
}

export default WorkAchievementService;