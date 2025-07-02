function SkillService() {
    const baseUri = 'https://experience.portfolio.dev.aidsbooger.com';

    async function readSkillById(id) {
        return await fetch(`${baseUri}/experience/skill/${id}`, {
            headers: {
                'Accept': 'text/json'
            }
        });
    }
    
    async function readAllSkill() {
        return await fetch(`${baseUri}/experience/skill`, {
            headers: {
                'Accept': 'text/json'
            }
        });
    }

    return { readSkillById, readAllSkill };
}

export default SkillService;