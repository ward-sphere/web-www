import { useEffect, useState } from "react";
import EducationService from "./service/education.service";
import WorkService from "./service/work.service";
import EducationView from "./view/education.view";
import WorkView from "./view/work.view";

const educationService = EducationService();
const workService = WorkService();

function ExperienceComponent() {
    const [work, setWork] = useState({loading: true, data: []})
    const [education, setEducation] = useState({loading: true, data: []})

    useEffect(() => {
        workService.readAllWork()
            .then(response => response.json())
            .then(data => { setWork({loading: false, data: data}); })
    }, []);

    useEffect(() => {
        educationService.readAllEducation()
            .then(response => response.json())
            .then(data => { setEducation({loading: false, data: data}); })
    }, []);

    return (
        <>
            <p class="WorkHeader">Work</p>
            {
                work.loading
                    ? (<p>Loading work...</p>)
                    : (work.data.map((item) => <WorkView dto={ item } />))
            }
            <p class="EducationHeader">Education</p>
            {
                education.loading
                    ? (<p>Loading education...</p>)
                    : (education.data.map((item) => <EducationView dto={ item } />))
            }
        </>
    )
}

export default ExperienceComponent;