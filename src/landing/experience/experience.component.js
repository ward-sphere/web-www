function Experience() {
    return (
        <div class="Experience">
            <img src="https://www.bd.com/content/dam/bd-assets/bd-com/en-us/logos/bd/header-bd-logo.svg" className="Experience-logo" alt="BD-logo"/>
            <div class="Experience-header">
                Becton-Dickinson | Software Quality Engineer II (Contract via Insight Global)
            </div>
            <div class="Experience-body">
                I was contracted to be a QA Engineer at BD, but since starting have been transitioned partly to a more software-focused role.
                <ul>
                    <li>
                        Implemented data control and user customization for internal software users dealing with drug database management based on country.
                    </li>
                    <li>
                        Investigated and resolved slow data leak in deployment microservice to mitigate risks to deployment cost.
                    </li>
                    <li>
                        Designed scalable testing infrastructure for system of microservices operating on Kafka data pipeline.
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Experience;