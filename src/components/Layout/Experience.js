import React, { useState, useEffect } from 'react';
import ExperienceRequest from '../../requests/experienceRequest';

const experienceRequest = new ExperienceRequest();
function Experience(){

    const [experiences, setExperiences] = useState([]);

    useEffect(()=>{
        experienceRequest.getExperience().then(response => {
            setExperiences(response.data);
        });
    },[])

    return(
        <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">
            <div className="w-100">
                <h2 className="mb-5">Experience</h2>
                <div>
                    {experiences.map(exp => (
                        <div key={exp.id} className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                            <div className="resume-content">
                                <h3 className="mb-0">{exp.role}</h3>
                                <div className="subheading mb-3">{exp.company}</div>
                                    <p>{exp.activities}</p>
                                </div>
                                <div className="resume-date text-md-right">
                                <span className="text-primary">{exp.start} - {exp.end}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience;