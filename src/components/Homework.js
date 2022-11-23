import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../Global";

export const HomeWork = () => {

    const [work, setWork] = useState([]);
    const [deadline, setDeadline] = useState("");
    const [task, setTask] = useState("");

    const navigate = useNavigate();
    // Submit Function
    const handleWorkSubmit = async (e) => {
        e.preventDefault();
        const bodyJSON = {
            task: task,
            deadline: deadline,
        }
        await fetch(`${API}/homework`, {
            method: 'POST',
            body: JSON.stringify(bodyJSON),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(res => res.json())
            .then(() => alert("Homework added successfully!"))
            .catch((err) => console.log(err))
            .then(() => navigate("/homework"))
            .then(() => setTask(""))
            .then(() => setDeadline(""))
            .catch((err) => console.log(err))
    }

    const getHomeworkData = () => {
        fetch(`${API}/homework`, {
            method: 'GET',
        })
            .then(res => res.json())
            .then((result) => setWork(result))
    }
    useEffect(() => getHomeworkData(), [task]);



    return (
        <div className="Homework">
            <div className="card shadow mb-4">
                {/* Card Heading */}
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Add Homework </h6>
                </div>
                <div className="card-body">
                    <form className="row g-3 needs-validation" novalidate onSubmit={handleWorkSubmit}>
                        {/* Provide the Task */}
                        <div className="col-md-4 position-relative">
                            <label for="validationTooltip01" className="form-label">Task</label>
                            <input type="text" className="form-control" id="validationTooltip01" onChange={(evt) => setTask(evt.target.value)} value={task} required />
                            <div className="valid-tooltip">
                                Looks good!
                            </div>
                        </div>
                        {/* Provide the Deadline */}
                        <div className="col-md-4 position-relative">
                            <label for="validationTooltip03" className="form-label">Deadline</label>
                            <input type="text" className="form-control" id="validationTooltip03" onChange={(evt) => setDeadline(evt.target.value)} value={deadline} required />
                            <div className="invalid-tooltip">
                                Please provide a deadline.
                            </div>
                        </div>
                        {/* Submit Button  */}
                        <div className="col-md-4 position-relative">
                            <button className="btn Addbtn btn-primary" type="submit">Add HomeWork</button>
                        </div>
                    </form>
                    {/* Table for displaying data from above */}
                    <div className="table-responsive">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Sl No.</th>
                                    <th>Task</th>
                                    <th>Deadline</th>
                                </tr>
                            </thead>
                            <tbody>
                                {work.map((todo, id) => (
                                    <tr key={id}>
                                        <td>{id + 1}</td>
                                        <td>{todo.task}</td>
                                        <td>{todo.deadline}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}