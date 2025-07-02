import { useState, useEffect } from "react"
import WorkSkillService from "../service/work.skill.service";
import SkillService from "../service/skill.service";

const workSkillService = new WorkSkillService();
const skillService = new SkillService();

function WorkSkillComponent({ workId }) {
    const [loading, setLoading] = useState(true);
    const [skills, setSkills] = useState([]);

    let workSkills = [{ id: '00000000-0000-0000-0000-000000000000', workId: -1, skillId: -1 }]

    useEffect(() => {
        workSkillService.readWorkSkillsByWorkId(workId)
            .then(response => response.json())
            .then(res => { workSkills = res; })
            .then(() => {
                skillService.readAllSkill()
                    .then(response => response.json())
                    .then(skills => {
                        console.log(skills);
                        console.log(workSkills);
                        setSkills(
                            workSkills.map((workSkill) => 
                                { return skills.find(
                                    skill => skill.id == workSkill.skillId
                                ).name; })
                        );
                    })
            })
            .then(() => { setLoading(false); })
    }, []);

    return (
        <div class="WorkSkills">
            {
                loading
                    ? (<p>Loading work...</p>)
                    : (`Skills: ${skills.join(", ")}`)
            }
        </div>
    );
}

export default WorkSkillComponent;