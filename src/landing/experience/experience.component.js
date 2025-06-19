import './experience.component.css'

function Experience() {
    return (
        <div class="Experience">
            <div class="Experience-content">
                
                <div class="Experience-header">
                    <div class="Experience-logo">
                        <img src="https://www.bd.com/content/dam/bd-assets/bd-com/en-us/logos/bd/header-bd-logo.svg" alt="BD-logo"/>
                    </div>
                    <div class="Experience-title">
                        Becton-Dickinson (Contract)<br/>
                        Software Quality Engineer II<br/>
                        Dec 2024 - Present
                    </div>
                </div>
                
                <div class="Experience-body">
                    I was contracted to be a QA Engineer at BD, but since starting have been transitioned partly to a more software-focused role.
                    <ul>
                        <li>
                            Implemented data control and user customization for internal software users dealing with drug database management based on country.
                        </li>
                        <li>
                            Investigated and resolved slow data leak in deployment microservice to minimize deployment cost.
                        </li>
                        <li>
                            Designed scalable testing infrastructure for system of microservices operating on Kafka data pipeline.
                        </li>
                    </ul>
                    Tools: C#, Azure, Angular, Docker, Octopus, Java, Kafka
                </div>
            </div>
        </div>
    );
}

export default Experience;