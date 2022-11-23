import React, { useState } from 'react';
import "./Studentinfo.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';
import { API } from '../../Global';

export const EditStudentInfo = ({ studentData }) => {

    // Function to put/edit data to the mockapi 
    const handleEditSubmit = async (evt) => {
        evt.preventDefault();
        const editStudent = {
            Id: id,
            Student: image,
            Name: name,
            Gender: gender,
            Address: address,
            dob: dob,
            Progress: progress
        }
        await fetch(`${API}/students/${studentData.id}`, {
            method: 'PUT',
            body: JSON.stringify(editStudent),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(res => res.json())
            .then(() => alert("Edited Info successfully"))
            .then(() => navigate("/student_info"))
            .catch((err) => console.log(err))
    }
    console.log(studentData)

    // Hooks to handle data flow to API
    const [id, setID] = useState(studentData.Id);
    const [image, setImage] = useState(studentData.Student);
    const [name, setName] = useState(studentData.Name);
    const [gender, setgGender] = useState(studentData.Gender);
    const [address, setAddress] = useState(studentData.Address);
    const [dob, setDob] = useState(studentData.dob);
    const [progress, setProgress] = useState(studentData.Progress);

    const navigate = useNavigate();


    return (
        <div className="EditStudentInfo">
            <div className="card shadow mb-4">
                {/* Card Heading */}
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Edit Details</h6>
                </div>
                <div className="card-body">
                    <form className="row g-3 needs-validation" novalidate onSubmit={handleEditSubmit}>
                        {/* ID */}
                        <div className="col-md-2 position-relative">
                            <label for="validationTooltip01" className="form-label">ID</label>
                            <input type="number" className="form-control" id="validationTooltip01" onChange={(e) => setID(e.target.value)} value={id} required />
                            <div className="valid-tooltip">
                                Looks good!
                            </div>
                        </div>
                        {/* Display URL */}
                        <div className="col-md-6 position-relative">
                            <label for="validationTooltip03" className="form-label">Image URL</label>
                            <input type="text" className="form-control" id="validationTooltip03" onChange={(e) => setImage(e.target.value)} value={image} required />
                            <div className="invalid-tooltip">
                                Please provide a valid URL.
                            </div>
                        </div>
                        {/* Name */}
                        <div className="col-md-4 position-relative">
                            <label for="validationTooltip02" className="form-label">Name</label>
                            <input type="text" className="form-control" id="validationTooltip02" onChange={(e) => setName(e.target.value)} value={name} required />
                            <div className="valid-tooltip">
                                Looks good!
                            </div>
                        </div>
                        {/* Gender */}
                        <div class="col-md-3 position-relative">
                            <label for="validationTooltip04" class="form-label">Gender</label>
                            <select class="form-select" id="validationTooltip04" onChange={(e) => setgGender(e.target.value)} value={gender} required>
                                <option selected disabled value="">Choose...</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Prefer not to say">Prefer not to say</option>
                            </select>
                            <div class="invalid-tooltip">
                                Please select a Gender.
                            </div>
                        </div>
                        {/* Address */}
                        <div className="col-md-6 position-relative">
                            <label for="validationTooltip03" className="form-label">Address</label>
                            <input type="text" className="form-control" id="validationTooltip03" onChange={(e) => setAddress(e.target.value)} value={address} required />
                            <div className="invalid-tooltip">
                                Please provide a valid Address.
                            </div>
                        </div>
                        {/* Date of Birth */}
                        <div className="col-md-3 position-relative">
                            <label for="validationTooltip03" className="form-label">Date oF Birth</label>
                            <input type="text" className="form-control" id="validationTooltip03" placeholder="25-08-2000" onChange={(e) => setDob(e.target.value)} value={dob} required />
                            <div className="invalid-tooltip">
                                Please provide a valid Date of Birth.
                            </div>
                        </div>
                        {/* Progress bar */}
                        <div className="col-md-3 position-relative">
                            <label for="validationTooltip05" className="form-label">Progress</label>
                            <input type="number" className="form-control" id="validationTooltip05" onChange={(e) => setProgress(e.target.value)} value={progress} required />
                            <div className="invalid-tooltip">
                                Please provide a valid Progress Number.
                            </div>
                        </div>
                        <div className="col-12">
                            <button className="btn btn-primary" type="submit">Submit form</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}