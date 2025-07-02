import { useEffect, useState } from "react";
import WorkService from "../service/work.service";
import WorkView from "../view/work.view";

function WorkComponent() {
    const [loading, setLoading] = useState(true);
    const [work, setWork] = useState({});

    const service = WorkService();

    useEffect(() => {
        service.readAllWork()
        .then(response => response.json())
        .then(data => { setWork(data); })
        .then(() => { setLoading(false); })
    }, []);

    return (
        <>
            {loading ? (
                <p>Loading...</p>
            ) : (
                work.map((item) => (<WorkView dto={ item } />))
            )}
        </>
    );
}

export default WorkComponent;