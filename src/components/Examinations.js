import React from "react";



export const Examinations = () => {
    // Storing and displaying Data
    const Examinations = [
        {
            id: 1,
            exam: "Science Test Paper",
            date: "03-12-2022"
        },
        {
            id: 2,
            exam: "Maths Unit Test Paper",
            date: "04-12-2022"
        },
        {
            id: 3,
            exam: "Language Test Paper",
            date: "05-12-2022"
        },
        {
            id: 4,
            exam: "HalfYearly Examinations",
            date: "15-12-2022 to 22-12-2022"
        }
    ]
    return (
        <div className="Examinations">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Upcoming Planned Examinations </h6>
                </div>
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
                            {Examinations.map((exams, id) => (
                                <tr key={id}>
                                    <td>{id + 1}</td>
                                    <td>{exams.exam}</td>
                                    <td>{exams.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}