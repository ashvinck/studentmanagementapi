import React, { useEffect, useState } from 'react';
import "./Studentinfo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { EditStudentInfo } from './Edit Student Info';
import { API } from "../../Global";
import { useNavigate, useParams } from 'react-router-dom';




export const StudentInfo = () => {

    const [stuinfo, setStuInfo] = useState([]); //hook to handle data from API
    const navigate = useNavigate();
    // Fetcg Data from API
    const getStudentData = () => {
        fetch(`${API}/students`, {
            method: 'GET',
        })
            .then(res => res.json())
            .then((result) => setStuInfo(result))
    }
    // To rerender on Changw
    useEffect(() => {
        getStudentData()
    }, []);


    return (
        <div className="card shadow mb-4">
            {/* Card Heading */}
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Student Info</h6>
            </div>
            <div className="card-body">
                {/* Table for displaying Student Info */}
                <div className="table-responsive">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th className='ta'> Sl No. </th>
                                <th className='ta'>Id</th>
                                <th className='ta'> Student </th>
                                <th className='ta'> Name </th>
                                <th className='ta'> Gender </th>
                                <th className='ta'> Address </th>
                                <th className='ta'> Date of Birth </th>
                                <th className='ta'> Progress </th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Iterating table over data */}
                            {stuinfo.map((data, id) => (
                                <tr key={id}>
                                    <td>{id + 1}</td>
                                    <td>{data.Id}</td>
                                    <td className="py-1">
                                        <img className='table-img' s alt="user icon" src={data.Student} />
                                    </td>
                                    <td>{data.Name}</td>
                                    <td>{data.Gender}</td>
                                    <td>{data.Address}</td>
                                    <td>{data.dob}</td>
                                    <td>
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-striped bg-success" role="progressbar" aria-label="Success example" style={{ width: `${data.Progress}%` }} aria-valuenow="{data.Progress}" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </td>
                                    <td>
                                        <button className='btn Delete' onClick={() => navigate(`/student/edit/${data.id}`)}>
                                            <FontAwesomeIcon icon={faPen} />
                                        </button>
                                    </td>
                                    <td>
                                        {/* Delete a student */}
                                        <button className="btn Delete" onClick={() => {
                                            fetch(`${API}/students/${data.id}`, {
                                                method: "DELETE",
                                            })
                                                .then(() => getStudentData())
                                                .then(() => alert("Deleted Student Successfully!"))
                                        }}>
                                            <FontAwesomeIcon icon={faTrash} />
                                        </button>
                                    </td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}