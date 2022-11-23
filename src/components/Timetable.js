import React from "react";


export const Timetable = () => {
    // Time table fro class
    return (
        <div className="card shadow mb-4 timetable">
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Time Table </h6>
            </div>
            <div className="table-responsive">
                <table className="table table-bordered table-nowrap mb-0 align-middle">
                    <thead className="bg-light">
                        <tr>
                            <th scope="col">Day</th>
                            <th scope="col">9.30 - 10.30</th>
                            <th scope="col">10.30 - 11.30</th>
                            <th scope="col">11.30 - 12.30</th>
                            <th scope="col">12.30 - 1.30</th>
                            <th scope="col">1.30 - 2.30</th>
                            <th scope="col">2.30 - 3.30</th>
                            {/* <th scope="col">Saturday</th> */}

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Monday</th>
                            <td>Maths</td>
                            <td>Social Science</td>
                            <td>Physics</td>
                            <td>Biology</td>
                            <td>Chemistry</td>
                            <td>English</td>

                        </tr>
                        <tr>
                            <th scope="row">Tuesday</th>
                            <td>Chemistry</td>
                            <td>Social Science</td>
                            <td>Physics</td>
                            <td>English</td>
                            <td>Maths</td>
                            <td>Biology</td>
                        </tr>
                        <tr>
                            <th scope="row">Wednesday</th>
                            <td>English</td>
                            <td>Chemistry</td>
                            <td>Maths</td>
                            <td>Physics</td>
                            <td>Biology</td>
                            <td>Social Science</td>


                        </tr>
                        <tr>
                            <th scope="row">Thursday</th>
                            <td>Social Science</td>
                            <td>Chemistry</td>
                            <td>English</td>
                            <td>Physics</td>
                            <td>Maths</td>
                            <td>Biology</td>
                        </tr>
                        <tr>
                            <th scope="row">Friday</th>
                            <td>Maths</td>
                            <td>English</td>
                            <td>Biology</td>
                            <td>Social Science</td>
                            <td>Chemistry</td>
                            <td>Physics</td>

                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    )
}
