import React, { useEffect, useState } from 'react';
import EducationRequest from '../../requests/educationRequest';

const educationRequest = new EducationRequest(); 

function Education(){
    const [educations,setEducations] = useState([]);

    useEffect(()=>{
        educationRequest.getEducation().then(response => {
            setEducations(response.data);
        })
    },[])


    return(
        <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="education">
            <div className="w-100">
            <h2 className="mb-5">Education</h2>
            {educations.map(ed => (

                <div key={ed.id} className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="resume-content">
                        <h3 className="mb-0">{ed.school}</h3>
                        <div className="subheading mb-3">{ed.degree}</div>
                        <div>{ed.descritpion}</div>
                            <p>{ed.obs}</p>
                        </div>
                        <div className="resume-date text-md-right">
                        <span className="text-primary">{ed.start} - {ed.end}</span>
                    </div>
                </div>
            ))}
            </div>
        </section>
    )
}

export default Education;