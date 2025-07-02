import { useEffect, useState } from "react";
import EducationService from "../service/education.service";
import EducationView from "../view/education.view";

const service = EducationService();

function EducationComponent() {
    const [loading, setLoading] = useState(true);
    const [education, setEducation] = useState({});

    useEffect(() => {
        service.readAllEducation()
        .then(response => response.json())
        .then(data => { setEducation(data); })
        .then(() => { setLoading(false); })
    }, []);

    return (
        <div class="Education">
            <p class="Education-Header">Education</p>
            {
                loading
                    ? (<p>Loading education...</p>)
                    : (education.map((item) => <EducationView dto={ item } />))
            }
        </div>
    );
}

export default EducationComponent;