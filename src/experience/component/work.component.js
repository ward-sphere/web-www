import { useEffect, useState } from "react";
import WorkService from "../service/work.service";
import WorkView from "../view/work.view";

const service = WorkService();

function WorkComponent() {
    const [loading, setLoading] = useState(true);
    const [work, setWork] = useState({});

    useEffect(() => {
        service.readAllWork()
        .then(response => response.json())
        .then(data => { setWork(data); })
        .then(() => { setLoading(false); })
    }, []);

    return (
        <div class="Work">
            <p class="Work-Header">Work</p>
            {
                loading
                    ? (<p>Loading work...</p>)
                    : (work.map((item) => <WorkView dto={ item } />))
            }
        </div>
    );
}

export default WorkComponent;