function WorkView({ dto }) {
    function formatDate(dateString) {
        let date = new Date(Date.parse(dateString));
        return `${date.getMonth()}/${date.getFullYear()}`;
    }

    return (
        <div class="WorkView">
            <div class="WorkView-header">
                <div class="WorkView-header-title">{dto.title} ({dto.employmentType})</div>
                <div class="WorkView-header-date">
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
            <div class="WorkView-subheader">
                <div class="WorkView-subheader-org">{dto.organization}</div>
                <div class="WorkView-subheader-location">{`${dto.location.city}, ${dto.location.state}, ${dto.location.country}`}</div>
            </div>
            <div class="WorkView-body">
                <div class="WorkView-body-description">{dto.description}</div>
            </div>
        </div>
    );
}

export default WorkView;