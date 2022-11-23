import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API } from "../../Global";
import { EditStudentInfo } from './Edit Student Info';

export const EditStudent = () => {
    const { id } = useParams();

    const [studentData, setStudentData] = useState(null);
    useEffect(() => {
        fetch(`${API}/students/${id}`, {
            method: 'GET',
        })
            .then(res => res.json())
            .then((student) => setStudentData(student))
    }, [])

    return studentData ? <EditStudentInfo studentData={studentData} /> : "Loading...";
}