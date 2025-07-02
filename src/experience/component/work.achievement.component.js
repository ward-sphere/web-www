import { useState, useEffect } from "react"
import WorkAchievementService from "../service/work.achievement.service";

const service = new WorkAchievementService();

function WorkAchievementComponent({ workId }) {
    const [loading, setLoading] = useState(true);
    const [workAchievements, setWorkAchievements] = useState([]);

    useEffect(() => {
        service.readWorkAchievementsByWorkId(workId)
            .then(response => response.json())
            .then(data => { setWorkAchievements(data); })
            .then(() => { setLoading(false); })
    }, []);

    return (
        <div class="WorkAchievements">
            {
                loading
                    ? (<p>Loading work...</p>)
                    : (<ul class="WorkAchievements-list">{
                        workAchievements.map((item) => <li class="WorkAchievement">{item.description}</li>)}</ul>)
            }
        </div>
    );
}

export default WorkAchievementComponent;