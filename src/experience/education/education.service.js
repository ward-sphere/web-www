function EducationService() {
    async function readAllEducation() {
        const baseUri = 'https://experience.portfolio.dev.aidsbooger.com';

        return await fetch(`${baseUri}/experience/education`, {
            headers: {
                'Accept': 'text/json'
            }
        });
    }

    return { readAllEducation };
}

export default EducationService;