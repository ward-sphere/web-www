function EducationView({ dto }) {
    function formatDate(dateString) {
        let date = new Date(Date.parse(dateString));
        return `${date.getMonth()}/${date.getFullYear()}`;
    }

    return (
        <div class="EducationView">
            <div class="EducationView-header">
                <div class="EducationView-header-school">{dto.school}</div>
                <div class="EducationView-header-date">
                    {formatDate(dto.startDate)}
                    {
                        ` - ${
                            dto.endDate === null
                                ? "Present"
                                : formatDate(dto.endDate)
                        }`
                    }
                </div>
            </div>
            <div class="EducationView-body">
                <div class="EducationView-body-degree">
                    {dto.degree}
                    {
                        dto.field === null
                            ? ""
                            : ` in ${dto.field}`
                    }
                </div>
                <div class="EducationView-body-description">{dto.description}</div>
            </div>
        </div>
    );
}

export default EducationView;