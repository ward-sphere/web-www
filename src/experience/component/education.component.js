import { useEffect, useState } from "react";
import EducationService from "../service/education.service";
import EducationView from "../view/education.view";

function EducationComponent() {
    const [loading, setLoading] = useState(true);
    const [education, setEducation] = useState({});

    const service = EducationService();

    useEffect(() => {
        service.readAllEducation()
        .then(response => response.json())
        .then(data => { setEducation(data); })
        .then(() => { setLoading(false); })
    }, []);

    return (
        <div class="EducationWrapper">
            {loading ? (
                <p>Loading...</p>
            ) : (
                education.map((item) => (<EducationView dto={ item } />))
            )}
        </div>
    );
}

export default EducationComponent;